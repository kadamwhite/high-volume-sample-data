'use strict';

const faker = require( 'faker' );

/**
 * Create a wrapper for Faker methods that takes in the method to call as
 * a path string, e.g. "name.firstName"
 *
 * This method is called with the relevant context object, e.g.
 *
 *     random( 'name.firstName' );
 *
 * is equivalent to
 *
 *     faker.name.firstName.call( faker.name );
 *
 * @param {string} methodPath The path of a method on the faker library object
 * @param {*} seed A non-falsy value to use as a seed
 * @returns {string} The string output of calling that method (with the provided arguments)
 */
const random = ( methodPath, seed, ...methodArgs ) => {
  faker.seed( seed );
  const pathParts = methodPath.split( '.' );
  const methodName = pathParts.pop();
  const contextObj = pathParts.reduce( ( chain, propName ) => chain[ propName ], faker );
  return contextObj[ methodName ].apply( contextObj, methodArgs );
}

const values = [
  'address.zipCode',
  'address.city',
  'address.cityPrefix',
  'address.citySuffix',
  'address.streetName',
  'address.streetAddress',
  'address.streetSuffix',
  'address.streetPrefix',
  'address.secondaryAddress',
  'address.county',
  'address.country',
  'address.countryCode',
  'address.state',
  'address.stateAbbr',
  'address.latitude',
  'address.longitude',
  'commerce.color',
  'commerce.department',
  'commerce.productName',
  'commerce.price',
  'commerce.productAdjective',
  'commerce.productMaterial',
  'commerce.product',
  'company.suffixes',
  'company.companyName',
  'company.companySuffix',
  'company.catchPhrase',
  'company.bs',
  'company.catchPhraseAdjective',
  'company.catchPhraseDescriptor',
  'company.catchPhraseNoun',
  'company.bsAdjective',
  'company.bsBuzz',
  'company.bsNoun',
  'date.past',
  'date.future',
  'date.between',
  'date.recent',
  'date.month',
  'date.weekday',
  'fake',
  'finance.account',
  'finance.accountName',
  'finance.mask',
  'finance.amount',
  'finance.transactionType',
  'finance.currencyCode',
  'finance.currencyName',
  'finance.currencySymbol',
  'finance.bitcoinAddress',
  'hacker.abbreviation',
  'hacker.adjective',
  'hacker.noun',
  'hacker.verb',
  'hacker.ingverb',
  'hacker.phrase',
  // 'helpers.randomize',
  // 'helpers.slugify',
  // 'helpers.replaceSymbolWithNumber',
  // 'helpers.replaceSymbols',
  // 'helpers.shuffle',
  // 'helpers.mustache',
  // 'helpers.createCard',
  // 'helpers.contextualCard',
  // 'helpers.userCard',
  // 'helpers.createTransaction',
  'image.image',
  'image.avatar',
  'image.imageUrl',
  'image.abstract',
  'image.animals',
  'image.business',
  'image.cats',
  'image.city',
  'image.food',
  'image.nightlife',
  'image.fashion',
  'image.people',
  'image.nature',
  'image.sports',
  'image.technics',
  'image.transport',
  'internet.avatar',
  'internet.email',
  'internet.exampleEmail',
  'internet.userName',
  'internet.protocol',
  'internet.url',
  'internet.domainName',
  'internet.domainSuffix',
  'internet.domainWord',
  'internet.ip',
  'internet.userAgent',
  'internet.color',
  'internet.mac',
  'internet.password',
  'lorem.word',
  'lorem.words',
  'lorem.sentence',
  'lorem.sentences',
  'lorem.paragraph',
  'lorem.paragraphs',
  'lorem.text',
  'lorem.lines',
  'name.firstName',
  'name.lastName',
  'name.findName',
  'name.jobTitle',
  'name.prefix',
  'name.suffix',
  'name.title',
  'name.jobDescriptor',
  'name.jobArea',
  'name.jobType',
  'phone.phoneNumber',
  'phone.phoneNumberFormat',
  'phone.phoneFormats',
  'random.number',
  'random.arrayElement',
  'random.objectElement',
  'random.uuid',
  'random.boolean',
  'random.word',
  'random.words',
  'random.image',
  'random.locale',
  'random.alphaNumeric',
  'system.fileName',
  'system.commonFileName',
  'system.mimeType',
  'system.commonFileType',
  'system.commonFileExt',
  'system.fileType',
  'system.fileExt',
  'system.directoryPath',
  'system.filePath',
  'system.semver'
];

const selection = [
'commerce.product',
'date.past',
'date.recent',
'hacker.abbreviation',
'hacker.adjective',
'image.image',
// 'image.nature',
'internet.url',
'lorem.words',
'name.findName'
];

selection.forEach( str => {
  console.log( `\n${str}:\n` );
  for ( let i = 1; i < 15; i++ ) {
    console.log( random( str, i ) );
  }
})
