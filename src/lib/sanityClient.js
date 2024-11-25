import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: '9xblrr3s',
  dataset: 'pdf',
  useCdn: false,
  apiVersion: '2024-01-01',
});