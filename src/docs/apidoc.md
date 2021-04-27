# apiDoc

## Description

> Library which provides functionality for creation a documentation from API descriptions in your source code.
> ##Platforms
> 1.JavaScript
> 2.Python
> 3.Ruby
> 4.PHP

### [Link for the npm](https://www.npmjs.com/package/apidoc)

### [Link for the documentstion](http://apidocjs.com/)

# Install

> 1.npm install apidoc -g
> 2.Add script "apidoc": "apidoc -i ./routes -o ./apidoc"
> 3.Add in package.json apidoc config

## apiDoc config
##### Format

```json
{
  "name": "[NAME_OF_YOUR_PROJECT]",
  "title": "[BROWSER_TITLE_TEXT]",
  "url": "[PREFIX_FOR_API_PATH_ENDPOINTS]",
  "order": ["GROUP"],
  "sampleUrl": "[PATH]"
}
```

##### Example

```json
{
  "name": "Example",
  "title": "My Title",
  "url": "https://api.github.com/v1",
  "order": ["Error", "Define", "PostTitleAndError", "PostError"],
  "sampleUrl": "https://api.github.com/v1"
}
```

> All static will be saved in apidoc direcroty of the root

# Minimum requirements

## @api
##### Format

```
* @api {[METHOD]} [YOUR_ROUTE] [COMMENT]
```

##### Example

```
* @api {get} /api/v1/appointments/get-available-apointments Request availible appointments on one day
```

## @apiName
##### Format

```
* @apiName [NAME]
```

##### Example

```
* @apiName availibleAppointments
```

## @apiGroup
##### Format

```
* @apiGroup [GROUP_NAME]
```

##### Example

```
* @apiGroup Appointment
```

## @apiDescription
##### Format

```
* @apiDescription [DESCRIPTION]
```

##### Example

```
 * @apiDescription Api send all all availible appointments.
```

## @apiHeader
##### Format

```
 * @apiHeader {[TYPE]} [HEADER_KEY] [DESCRIPTION].
```

##### Example

```
 * @apiHeader {string} x-access-token Users unique access-key.
```

## @apiParam
##### Format

```
* @apiParam {[TYPE]} [KEY] [DESCRIPTION]
```

##### Example

```
* @apiParam {string} propertyId id of property
```

## @apiSuccess
##### Format

```
/**
 * @apiSuccess {[TYPE]} [KEY] [DESCRIPTION].
 */
```

###### Example

```
/**
 * @apiSuccess {Object[]} profiles       List of user profiles.
 * @apiSuccess {Number}   profiles.age   Users age.
 * @apiSuccess {String}   profiles.image Avatar-Image.
 */
```

## @apiError
##### Format

```
 * @apiError [FIELD] [DESCRIPTION]
```

##### Example

```
 * @apiError UserNotFound The id of the User was not found.
```

## @apiSampleRequest
##### Format

```
 * @apiSampleRequest [PATH]
```

##### Example

```
 * @apiSampleRequest /api/v1/appointments/get-available-apointments
```

# Recommended parameters
## @apiSuccessExample
##### Example

```
 * @apiSuccessExample Success-Response:
 *{
 *   "data": {
 *      "availableTimes": [
 *        "10:00",
 *        "10:30",
 *        "11:30",
 *        "12:30",
 *        "13:30",
 *        "14:00",
 *        "14:30",
 *        "15:00",
 *        "15:30",
 *        "16:00",
 *        "16:30",
 *        "17:00",
 *        "17:30"
 *      ],
 *       "gracePeriod": 30
 *   },
 *   "datetime": 1564164385982,
 *   "info": "APPOINTMENTS",
 *   "misc": "NO_ADDITIONAL_INFORMATION",
 *   "request": "/api/v1/appointments/get-available-apointments?date=2019-07-29&&propertyId=1 [GET]",
 *   "status": 200
 *}
```

## @apiErrorExample
##### Example

```
 * @apiErrorExample {json} Error-Response:
 *  Error 401: Unauthorized
 *{
 *   "datetime": 1564148026540,
 *   "info": "MISSING_TOKEN",
 *   "misc": "NO_ADDITIONAL_INFORMATION",
 *   "request": "/api/v1/appointments/get-appointment-schedule?date= [GET]",
 *   "status": 401
 *}
```

# Route Example

```js
/**
 * @api {get} /api/v1/appointments/get-available-apointments Request availible appointments on one day
 * @apiName availibleAppointments
 * @apiGroup Appointment
 *
 * @apiDescription Api send all all availible appointments.
 * @apiHeader {string} x-access-token Users unique access-key.
 * @apiParam {string} date appointment date YY MM DD
 * @apiParam {string} propertyId id of property
 *
 * @apiSuccess {string} appointmentDate appointment date.
 * @apiSuccess {number} updated updated.
 *
 * @apiSuccessExample Success-Response:
 *{
 *   "data": {
 *      "availableTimes": [
 *        "10:00",
 *        "10:30",
 *        "11:30",
 *        "12:30",
 *        "13:30",
 *        "14:00",
 *        "14:30",
 *        "15:00",
 *        "15:30",
 *        "16:00",
 *        "16:30",
 *        "17:00",
 *        "17:30"
 *      ],
 *       "gracePeriod": 30
 *   },
 *   "datetime": 1564164385982,
 *   "info": "APPOINTMENTS",
 *   "misc": "NO_ADDITIONAL_INFORMATION",
 *   "request": "/api/v1/appointments/get-available-apointments?date=2019-07-29&&propertyId=1 [GET]",
 *   "status": 200
 *}
 * @apiError UserNotFound MISSING_TOKEN
 *
 * @apiErrorExample {json} Error-Response:
 *  Error 401: Unauthorized
 *{
 *   "datetime": 1564148026540,
 *   "info": "MISSING_TOKEN",
 *   "misc": "NO_ADDITIONAL_INFORMATION",
 *   "request": "/api/v1/appointments/get-appointment-schedule?date= [GET]",
 *   "status": 401
 *}
 *
 * @apiSampleRequest /api/v1/appointments/get-available-apointments
 */
router.get(
  '/get-available-apointments',
  authenticate,
  availableApointementsValidation,
  controller.getAvailableApointments
);
```
