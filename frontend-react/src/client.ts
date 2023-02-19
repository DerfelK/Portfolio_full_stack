import { createClient } from "@sanity/client";
import createImageUrlBuilder from "@sanity/image-url"

export const config = {
    projectId: 'qigewvwc', //process.env.REACT_APP_SANITY_PROJECT_ID || "",
    dataset: 'production',
    apiVersion: '2023-02-01',
    useCdn: true,
    token: 'sksgWKgCoQ3uqS5fSWtqwp2YzpArcc0Z1tnDNRy3ghDsWSBYQlrUEq1HGgedHExJMBAxKHdkuKcg0ixYV23nAP63jUZJWOkkEmZ2DUvuwABhBu8698QgGxA8Hlbou5QI2W9Ll4RKaWyb2YuAuOZMx7xDoyIuzbr3xZBM0bbmpQmlBkrTEvHH'//process.env.REACT_APP_SANITY_TOKEN,
}

export const sanityClient = createClient(config);

export const urlFor = (source: any) => createImageUrlBuilder(config).image(source);