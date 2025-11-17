# UI Component Specification

This document outlines the established patterns, conventions, and standards for UI components in this design system.

## Core Architecture

### Technology Stack

- **React**: Functional components with hooks
- **TypeScript**: Full type safety with strict typing
- **Tailwind CSS**: Utility-first styling
- **Tailwind Variants**: Component variant management
- **Next.js**: Framework integration (Image, Link components)

### Component Structure

All components follow a consistent file structure:

```
ComponentName/
├── ComponentName.tsx     # Main component implementation
├── ComponentGroup.tsx    # Optional: Group/container variant
├── ComponentContainer.tsx # Optional: Container wrapper
└── index.ts             # Barrel exports
```

## TypeScript Patterns

### Import Structure

```typescript
import React, { forwardRef, JSX } from "react";
import { tv, type VariantProps } from "tailwind-variants";
// Additional imports (Next.js components, icons, etc.)
```

### Type Definitions

```typescript
// 1. Define styles with tailwind-variants
const ComponentStyles = tv({
  base: "base-classes",
  variants: {
    /* variant definitions */
  },
  defaultVariants: {
    /* defaults */
  },
});

// 2. Extract variant types
type ComponentVariants = VariantProps<typeof ComponentStyles>;

// 3. Define component props
export type ComponentProps = JSX.IntrinsicElements["element"] &
  ComponentVariants;
```

### Prop Type Patterns

- **Base Element**: Extend `JSX.IntrinsicElements["element"]` for the underlying HTML element
- **Variants**: Use `VariantProps<typeof ComponentStyles>` for styling variants
- **Required Props**: Use `Required<Pick<Type, "prop">>` for mandatory variant props
- **Custom Props**: Add component-specific props with JSDoc documentation
- **Omit Conflicts**: Use `Omit<BaseType, "conflictingProp">` when needed

## Component Implementation

### forwardRef Pattern

All components use `forwardRef` for proper ref forwarding:

```typescript
export const Component = forwardRef<HTMLElementType, ComponentProps>(
  ({ variant1, variant2, className, ...props }, ref) => {
    return (
      <element
        ref={ref}
        className={ComponentStyles({ variant1, variant2, className })}
        {...props}
      />
    );
  }
);

Component.displayName = "Component";
```

### Key Patterns

- **Destructure variants first**: Extract styling variants before spreading remaining props
- **Always include className**: Allow className override in variant function
- **Spread remaining props**: Use `{...props}` for HTML attribute passthrough
- **Set displayName**: Required for debugging and dev tools

## Styling with Tailwind Variants

### Variant Definition Structure

```typescript
const ComponentStyles = tv({
  base: ["base-classes", "group-specific-classes"],
  variants: {
    variantName: {
      option1: "classes-for-option1",
      option2: ["multiple", "classes", "for-option2"],
    },
  },
  defaultVariants: {
    variantName: "option1",
  },
});
```

### Variant Documentation

Use JSDoc comments for variant documentation:

```typescript
variants: {
  /**
   * @summary Brief description of what this variant controls
   * @default "defaultValue"
   */
  variantName: {
    // variant options
  },
}
```

### Group Styling Pattern

Components that work within groups use Tailwind's group modifier:

```typescript
base: [
  "default-styles",
  "group-[&]/group-name:group-specific-styles",
  "group-[&]/group-name:first:first-child-styles",
  "group-[&]/group-name:last:last-child-styles",
];
```

### Dark Mode Support

All components include dark mode variants:

```typescript
"text-base-900 bg-base-100 border-base-400",
"dark:text-base-400 dark:bg-base-1200 dark:border-base-1000",
```

### State Variants

Handle interactive states consistently:

```typescript
// Hover states
"hover:bg-primary-700 hover:border-primary-700",

// Focus states
"focus:ring-active focus:border-white",

// Disabled states
"disabled:opacity-60 disabled:pointer-events-none",

// Invalid states
"invalid:text-danger-900 invalid:bg-danger-100",
```

## Component Variants

### Link Variants

Components that can render as links follow this pattern:

```typescript
export type ComponentLinkProps = React.ComponentPropsWithoutRef<typeof NextLink> & ComponentVariants;

export const ComponentLink = forwardRef<
  React.ComponentRef<typeof NextLink>,
  ComponentLinkProps
>(({ className, variant1, variant2, ...props }, ref) => {
  return (
    <NextLink
      ref={ref}
      className={ComponentLinkStyles({ variant1, variant2, className })}
      {...props}
    />
  );
});
```

### Group/Container Components

Group components provide context for child components:

```typescript
const GroupStyles = tv({
  base: "group/component-group flex", // Note the group naming
});

export const ComponentGroup = forwardRef<HTMLDivElement, ComponentGroupProps>(
  ({ className, ...props }, ref) => {
    return (
      <div ref={ref} className={GroupStyles({ className })} {...props} />
    );
  }
);
```

## Polymorphic Components

For components that can render as different HTML elements:

```typescript
export type ComponentProps = JSX.IntrinsicElements["h1" | "h2" | "h3"] &
  ComponentVariants & {
    /**
     * @summary informs the dom type.
     * @default "h3"
     */
    as?: "h3" | "h2" | "h1";
  };

export const Component = forwardRef<HTMLHeadingElement, ComponentProps>(
  ({ level = "h3", as, className, ...props }, ref) => {
    const Element = as ?? level;

    return (
      <Element
        ref={ref}
        className={ComponentStyles({ level, className })}
        {...props}
      />
    );
  }
);
```

## Export Patterns

### Index Files

Use barrel exports in `index.ts` files:

```typescript
export * from "./Component";
export * from "./ComponentGroup";
export * from "./ComponentContainer";
```

### File Extensions

- `.tsx` for component files
- `.ts` for index/utility files

## Best Practices

### Naming Conventions

- **Components**: PascalCase (`Button`, `AvatarGroup`)
- **Props**: camelCase with descriptive names
- **Variants**: camelCase, semantic names (`intent`, `size`, `palette`)
- **CSS Classes**: Follow Tailwind conventions

### Documentation

- Use JSDoc for prop documentation
- Include `@summary` for variant descriptions
- Specify `@default` values for variants
- Document custom props with clear descriptions

### Accessibility

- Always forward refs for proper focus management
- Use semantic HTML elements as base
- Include proper ARIA attributes when needed
- Support keyboard navigation patterns

### Performance

- Use `forwardRef` for all components
- Leverage Tailwind's purging for optimal bundle size
- Avoid inline styles, prefer Tailwind classes
- Use `React.memo` only when necessary

### Error Handling

- Provide sensible defaults for all variants
- Use TypeScript for compile-time error prevention
- Handle edge cases gracefully (missing images, etc.)

## Common Patterns Summary

1. **Consistent file structure** with component + index files
2. **forwardRef** for all components with proper typing
3. **Tailwind Variants** for styling with JSDoc documentation
4. **Group context** support via Tailwind group modifiers
5. **Dark mode** support for all visual components
6. **Link variants** for interactive components
7. **Polymorphic support** where semantically appropriate
8. **Barrel exports** for clean imports
9. **TypeScript strict mode** with comprehensive typing
10. **Semantic HTML** with accessibility considerations
