//import * as dotenv from 'dotenv'
//dotenv.config({ encoding: 'latin1' }) 

import { createClient } from "@sanity/client"
import createImageUrlBuilder from "@sanity/image-url"

export const client = {
    projectId: import.meta.env.VITE_SANITY_PROJECT_ID || "",
    dataset: 'production',
    apiVersion: '2023-02-01',
    useCdn: true,
    token: import.meta.env.VITE_SANITY_TOKEN,
}

export const sanityClient = createClient(client);

export const urlFor = (source: any) => createImageUrlBuilder(client).image(source);