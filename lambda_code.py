import json
import logging
import boto3

logger = logging.getLogger()
logger.setLevel(logging.INFO)


def lambda_handler(event, context):

    # Get the length and width parameters from the event object. The
    # runtime converts the event object to a Python dictionary

    body = event["body"]

    body = json.loads(body)

    email = body["email"]
    name = body["name"]
    subject_line = body["sline"]
    message = body["message"]

    print("Email:", email)
    print("Name:", name)
    print("Subject Line", subject_line)
    print("Message", message)

    client = boto3.client("ses")
    response = client.send_email(
        Destination={
            "ToAddresses": ["mail2nandhup@gmail.com"],
        },
        Message={
            "Body": {
                "Text": {
                    "Charset": "UTF-8",
                    "Data": "From: "
                    + name
                    + " Message: "
                    + message
                    + " Email: "
                    + email,
                },
            },
            "Subject": {
                "Charset": "UTF-8",
                "Data": subject_line,
            },
        },
        Source="mail2nandhup@gmail.com",
    )

    return {
        "statusCode": 200,
        "body": response,
        "headers": {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Credentials": True,
        },
    }
    # if (valid_json(requestPayload)):
    #     return {
    #         "statusCode" : 200,
    #         "body" : json.dumps("Valid Request")
    #     }
    # else:
    #     return{
    #         "statusCode" : 400,
    #         "body" : json.dumps("Invalid Request")
    #     }
