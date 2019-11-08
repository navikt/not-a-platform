const bemUtils = (cls: string) => ({
    block: cls,
    element: (e?: string, m?: string) => `${cls}__${e}${m ? ` ${cls}__${e}--${m}` : ''}`,
    modifier: (m?: string) => `${cls}--${m}`,
    blockModifier: (m?: string) => `${cls} ${cls}--${m}`,
});

export default bemUtils;
