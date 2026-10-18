// Shared site navigation and footer.
// In each page, put <script src="assets/layout.js?v=X.Y.Z"></script> in the <head>, then
// <script>renderNav()</script> where the nav goes and <script>renderFooter()</script> where the footer goes.
// The version string below is the site version shown in every page's footer.
const SITE_VERSION = 'v1.2.0';

const SITE_NAV = `
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
            <div class="container d-flex justify-content-center align-items-center">
                <a class="navbar-brand d-flex align-items-center me-4" href="index.html">
                    <img src="assets/logo.png" alt="Ragnarok Robotics Logo" onerror="this.style.display='none'">
                    <span class="viking-font ms-2">Team 3748</span>
                </a>

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse flex-grow-0" id="navbarNav">
                    <ul class="navbar-nav ms-auto align-items-center">
                        <li class="nav-item"><a class="nav-link" href="index.html">Home</a></li>

                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="aboutDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                About
                            </a>
                            <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="aboutDropdown">
                                <li><a class="dropdown-item" href="about.html">Our Legacy</a></li>
                                <li><a class="dropdown-item" href="team-members.html">Meet the Team</a></li>
                                <li><a class="dropdown-item" href="first-inspires.html">FIRST Inspires</a></li>
                            </ul>
                        </li>

                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="seasonsDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Seasons</a>
                            <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="seasonsDropdown">
                                <li><h6 class="dropdown-header">2027 Coming Soon</h6></li>
                                <li><a class="dropdown-item" href="2027-game.html">Season Overview</a></li>
                                <li><hr class="dropdown-divider"></li>
                                <li><h6 class="dropdown-header">2026 RebuilT</h6></li>
                                <li><a class="dropdown-item" href="2026-game.html">Season Overview</a></li>
                                <li><a class="dropdown-item" href="2026-district-rankings.html">District Rankings</a></li>
                                <li><a class="dropdown-item" href="2026-pasadena-results.html">Pasadena Results</a></li>
                                <li><a class="dropdown-item" href="2026-severn-results.html">Severn Run Results</a></li>
                                <li><a class="dropdown-item" href="2026-dcmp-results.html">District Championship</a></li>
                                <li><hr class="dropdown-divider"></li>
                                <li><h6 class="dropdown-header">2025 Reefscape</h6></li>
                                <li><a class="dropdown-item" href="2025-game.html">Season Overview</a></li>
                                <li><a class="dropdown-item" href="2025-severn-results.html">Severn Results</a></li>
                                <li><a class="dropdown-item" href="2025-alexandria-results.html">Alexandria Results</a></li>
                                <li><a class="dropdown-item" href="2025-dcmp-results.html">District Championship</a></li>
                                <li><a class="dropdown-item" href="2025-worlds-results.html">FIRST Championship</a></li>
                                <li><hr class="dropdown-divider"></li>
                                <li><h6 class="dropdown-header">2024 Crescendo</h6></li>
                                <li><a class="dropdown-item" href="2024-game.html">Season Overview</a></li>
                                <li><a class="dropdown-item" href="2024-severn-results.html">Severn Results</a></li>
                                <li><a class="dropdown-item" href="2024-owings-mills-results.html">Owings Mills Results</a></li>
                            </ul>
                        </li>

                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="sponsorDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Sponsorship
                            </a>
                            <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="sponsorDropdown">
                                <li><a class="dropdown-item" href="sponsors.html">Sponsors</a></li>
                                <li><a class="dropdown-item" href="Sponsorship-opportunities.html">Sponsorship Opportunities</a></li>
                            </ul>
                        </li>

                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="galleriesDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Galleries</a>
                            <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="galleriesDropdown">
                                <li><h6 class="dropdown-header">2026 RebuilT</h6></li>
                                <li><a class="dropdown-item" href="gallery-2026-season.html">Season Gallery</a></li>
                                <li><a class="dropdown-item" href="gallery-2026-homecoming-parade.html">Homecoming Parade</a></li>
                                <li><a class="dropdown-item" href="gallery-stjohnslane-stem-night.html">St. John's Lane STEM Night</a></li>
                                <li><a class="dropdown-item" href="gallery-2026-pasadena-competition.html">Pasadena Competition</a></li>
                                <li><a class="dropdown-item" href="gallery-2026-severn-competition.html">Severn Run Competition</a></li>
                                <li><a class="dropdown-item" href="gallery-2026-dcmp.html">District Championship</a></li>
                                <li><hr class="dropdown-divider"></li>
                                <li><h6 class="dropdown-header">2025 Reefscape</h6></li>
                                <li><a class="dropdown-item" href="gallery-2025-season.html">Season Gallery</a></li>
                                <li><a class="dropdown-item" href="gallery-2025-battle-of-baltimore.html">Battle of Baltimore</a></li>
                            </ul>
                        </li>
                        <li class="nav-item"><a class="nav-link no-wrap" href="contact-us.html">Contact Us</a></li>

                        <li class="nav-item ms-lg-3">
                            <a href="https://osp.osmsinc.com/HowardMD/BVModules/ProductTemplates/Bvc2013/Product.aspx?productid=DA010-VAR125" target="_blank" rel="noopener" class="btn btn-norse w-100">DONATE</a>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>`;

const SITE_FOOTER = `
        <footer id="contact">
            <div class="container">
                <div class="row align-items-center mb-2">
                    <div class="col-md-6 mb-4 mb-md-0">
                        <div class="d-flex align-items-center">
                            <div class="me-3">
                                <img src="assets/school-logo.png" alt="Mt. Hebron High School Logo" class="footer-logo" onerror="this.style.display='none'">
                            </div>
                            <div>
                                <h5 class="text-uppercase fw-bold mb-1">Mt. Hebron High School</h5>
                                <p class="text-white-50 mb-0">
                                    9440 Old Frederick Rd,<br>
                                    Ellicott City, MD 21042
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-6 text-md-end">
                        <h5 class="text-uppercase fw-bold">Contact Us</h5>
                        <p class="mb-3">
                            <a href="mailto:mthragnarok@gmail.com" class="text-white fs-5">mthragnarok@gmail.com</a>
                        </p>
                        <div class="social-icons">
                            <a href="https://www.facebook.com/Team3748Ragnarok" aria-label="Facebook"><i class="fab fa-facebook"></i></a>
                            <a href="https://www.instagram.com/frc3748/" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
                            <a href="https://www.youtube.com/c/frcroboticsteam3748" aria-label="YouTube"><i class="fab fa-youtube"></i></a>
                        </div>
                    </div>
                </div>

                <div class="border-top border-secondary pt-2 text-center">
                    <small class="text-white">Copyright © 2026 Team 3748 Ragnarok Robotics</small><br />
                    <small class="text-white">Assisted by Google Gemini and Anthropic Claude</small><br />
                    <small class="text-white">${SITE_VERSION}</small>
                </div>
            </div>
        </footer>`;

function htmlToFragment(html) {
    const template = document.createElement('template');
    template.innerHTML = html.trim();
    return template.content;
}

function currentPageName() {
    const name = decodeURIComponent(window.location.pathname.split('/').pop()) || 'index.html';
    return name.endsWith('.html') ? name : name + '.html';
}

function renderNav() {
    const nav = htmlToFragment(SITE_NAV);
    const page = currentPageName().toLowerCase();
    nav.querySelectorAll('a.nav-link, a.dropdown-item').forEach(link => {
        if ((link.getAttribute('href') || '').toLowerCase() !== page) return;
        link.classList.add('active');
        link.setAttribute('aria-current', 'page');
        const toggle = link.closest('.dropdown')?.querySelector('.dropdown-toggle');
        if (toggle) toggle.classList.add('active');
    });
    // Replace the calling <script> tag with the nav
    document.currentScript.replaceWith(nav);
}

function renderFooter() {
    document.currentScript.replaceWith(htmlToFragment(SITE_FOOTER));
}
