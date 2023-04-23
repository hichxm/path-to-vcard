# Path to vCard (vcf)

Transform URL path to vCard file (`.vcf`) 
using [vcards-js](https://github.com/enesser/vCards-js) package

# How to use `Path to vCard`

To use `Path to vCard` you need to show all available properties of [vcards-js](https://github.com/enesser/vCards-js) 
library

```js
// full properties here : https://github.com/enesser/vCards-js#complete-example

var vCard = vCardsJS();

//set basic properties shown before
vCard.firstName = 'Hicham';
vCard.middleName = 'M';
vCard.lastName = 'Slimani';
vCard.uid = 'a0c0a844-eeb3-4897-b595-54880930e4d7';
vCard.organization = 'DigitYourDream';
```

To access to vcf file you need to set all property to url parameter with `_` prefix

```
http://example.com/path-to-vcard?_firstName=Hicham&_middleName=M&_lastName=Slimani&_uid=a0c0a844-eeb3-4897-b595-54880930e4d7&organization=DigitYourDream
```

## Use case

### Notion formula

```
"http://localhost:5173/?_firstName=" + prop("First name") + "&_lastName=" + prop("Last name") + "&_gender=" + prop("Genre") + "&_organization=" + prop("🏢 Companies") + "&_workPhone=" + replaceAll(replaceAll(prop("Phone pro"), " ", ""), "[+]", "%2B") + "&_homePhone=" + replaceAll(replaceAll(prop("Phone maison"), " ", ""), "[+]", "%2B") + "&_homePhone=" + replaceAll(replaceAll(prop("Phone perso"), " ", ""), "[+]", "%2B") + "&_workEmail=" + prop("Email") + "&_email=" + prop("Email perso") + "&_namePrefix=" + prop("Genre")
```