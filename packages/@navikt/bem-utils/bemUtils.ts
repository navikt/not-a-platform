interface BemUtilInterface {
    block: string;
    element: (e: string, m?: string) => string;
    modifier: (m: string) => string;
    blockModifier: (m?: string) => string;
}

const bemUtils = (cls: string): BemUtilInterface => ({
    block: cls,
    element: (e: string, m?: string): string => `${cls}__${e}${m ? ` ${cls}__${e}--${m}` : ''}`,
    modifier: (m: string): string => `${cls}--${m}`,
    blockModifier: (m?: string): string => `${cls} ${cls}--${m}`,
});

export default bemUtils;
