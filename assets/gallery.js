// Shared gallery loader. Include with:
// <script src="assets/gallery.js?v=X.Y.Z" data-folder="GOOGLE_DRIVE_FOLDER_ID" data-alt="Image alt prefix"></script>
(function () {
    const GOOGLE_FUNCTION_URL = 'https://us-east4-mth-web-site-processing.cloudfunctions.net/mth-image-provider';
    const script = document.currentScript;
    const FOLDER_ID = script.dataset.folder;
    const ALT_PREFIX = script.dataset.alt || 'Gallery';

    let currentPage = 1;
    let totalPages = 1;

    async function fetchGalleryImages(page) {
        const galleryContainer = document.getElementById('gallery-container');
        const loadingSpinner = document.getElementById('loading-spinner');
        const paginationContainer = document.getElementById('pagination-container');

        galleryContainer.innerHTML = '';
        if (loadingSpinner) loadingSpinner.style.display = 'block';

        try {
            const response = await fetch(`${GOOGLE_FUNCTION_URL}?folder=${FOLDER_ID}&page=${page}`);
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

            const data = await response.json();
            if (loadingSpinner) loadingSpinner.style.display = 'none';

            const { images, page: currentP, totalPages: totalP } = data;
            currentPage = currentP;
            totalPages = totalP;

            if (!Array.isArray(images) || images.length === 0) {
                galleryContainer.innerHTML = `<div class="col-12 text-center text-muted"><p>No images found.</p></div>`;
                return;
            }

            images.forEach((src, i) => {
                const col = document.createElement('div');
                col.className = 'col-6 col-md-4 col-lg-3';
                col.innerHTML = `
                    <div class="gallery-item" data-bs-toggle="modal" data-bs-target="#galleryModal" data-src="${src}">
                        <div class="ratio ratio-4x3">
                            <img src="${src}" alt="${ALT_PREFIX} Image ${i + 1}" loading="lazy" referrerpolicy="no-referrer" style="object-fit: cover;">
                        </div>
                        <div class="gallery-overlay"><i class="fas fa-search-plus"></i></div>
                    </div>`;
                galleryContainer.appendChild(col);
            });

            document.getElementById('page-indicator').textContent = `Page ${currentPage} of ${totalPages}`;
            document.getElementById('btn-prev').disabled = currentPage <= 1;
            document.getElementById('btn-next').disabled = currentPage >= totalPages;
            paginationContainer.style.display = totalPages > 1 ? 'flex' : 'none';

        } catch (error) {
            console.error('Error fetching gallery images:', error);
            if (loadingSpinner) loadingSpinner.style.display = 'none';
            galleryContainer.innerHTML = `<div class="col-12 text-center text-danger"><p>Unable to load gallery images at this time.</p></div>`;
        }
    }

    // Called from the Prev/Next buttons' onclick handlers
    window.changePage = function (direction) {
        const newPage = currentPage + direction;
        if (newPage < 1 || newPage > totalPages) return;
        window.scrollTo({ top: 0, behavior: 'smooth' });
        fetchGalleryImages(newPage);
    };

    document.addEventListener('DOMContentLoaded', function () {
        fetchGalleryImages(1);
        const galleryModalElement = document.getElementById('galleryModal');
        if (galleryModalElement) {
            galleryModalElement.addEventListener('show.bs.modal', function (event) {
                document.getElementById('modalImage').src = event.relatedTarget.getAttribute('data-src');
            });
        }
    });
})();
