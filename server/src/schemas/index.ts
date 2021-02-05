import { PageSchema } from './page';
import { ArtboardSchema } from './artboard';
import { stitchSchemas } from '@graphql-tools/stitch';

// build the combined schema
export const schemas = stitchSchemas({
    subschemas: [{ schema: PageSchema }, { schema: ArtboardSchema }],
});
