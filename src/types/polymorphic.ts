import React from "react";

export type PolymorphicRef<C extends React.ElementType> =
  React.ComponentPropsWithRef<C>["ref"];

export type PolymorphicComponentProps<
  C extends React.ElementType,
  Props = Record<string, never>
> = Props & {
  /**
   * @summary Overrides the underlying element rendered by the component.
   * Provide a component such as Next.js' Link to integrate with a router.
   */
  component?: C;
} & Omit<React.ComponentPropsWithoutRef<C>, keyof Props | "component">;

export type PolymorphicComponentPropsWithRef<
  C extends React.ElementType,
  Props = Record<string, never>
> = PolymorphicComponentProps<C, Props> & { ref?: PolymorphicRef<C> };

export type PolymorphicForwardRefComponent<
  DefaultElement extends React.ElementType,
  Props = Record<string, never>
> = {
  <C extends React.ElementType = DefaultElement>(
    props: PolymorphicComponentPropsWithRef<C, Props>
  ): React.ReactElement | null;
  displayName?: string;
};
