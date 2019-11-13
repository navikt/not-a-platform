interface BemUtilInterface {
    block: string;
    element: (e: string, m?: string) => string;
    modifier: (m: string) => string;
    blockModifier: (m?: string) => string;
}
declare const bemUtils: (cls: string) => BemUtilInterface;
export default bemUtils;
