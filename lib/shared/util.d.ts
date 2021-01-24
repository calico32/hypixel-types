export type IndexType = {
  [key: string]:
    | undefined
    | string
    | number
    | boolean
    | string[]
    | number[]
    | { [key: string]: any };
};
