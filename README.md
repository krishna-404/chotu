# Chotu - URL shortner
Chotu is a hindi word which a synonym for small. Chotu is a url-shortner service. Users can give their url & request a specific 6 digit small url for the same.

The software accepts 2 values, the Long Url & any preferred code. The Long Url is mandatory & in the absence of any preferred code mentioned by the user, the system generates a random 6 digit short code.
## Front-End Access
You can access the live version at https://chotu.onrender.com enter the values into a form & get a chotu link.
- The form accepts only valid urls.
- Preferred Short Code length is min 4 characters.

All Responses are in json format.

## Chotu Link access & Redirection
Visiting the chotu link( https://chotu.onrender.com/< Short Code > ) redirects to the Long URL.
- Visiting a url with invalid short code give a 404 error.

## API-Access

### Get a new chotu link
API access is available on calling https://chotu.onrender.com/submit?longUrl=< Long Url - Mandatory >&shortCode=< Preferred Short Code - Optional >
-  API returns a json with error property if longurl is not available or the preferred-short-code already exists in the database.
Note: In API access the code presently doesnt check for valid url & preferred-short-code length.

### Get Status for a chotu link
Accessing https://chotu.onrender.com/< Short Code >/stats returns a json response with 5 values.
- Long URL (longUrl)
- Chotu Link (chotu)
- Link Registered Date (registeredDate)
- Last Access Date (lastAccessDate)
- Number of times Chotu Link Accessed (totalAccessNumber)

