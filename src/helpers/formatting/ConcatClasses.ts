type Class = string | undefined
export const ConcatClasses = (...classes: Class[]) =>
    classes
        .filter(className => !!className)
        .join(' ')