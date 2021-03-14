import React from 'react';
import { styled } from '../stitches.config';
import { tokensToProps } from '../utils/stitches.helpers';


export const StyledText = styled("span", {
    $$color: "$black",
    variants: {
        type: {
            h1: {
                fontSize: "$xxlg",
                fontWeight: "$bold",
            },
            h2: {
                fontSize: "$xlg",
                fontWeight: "$medium"
            },
            h3: {
                fontSize: "$lg",
                fontWeight: "$medium"
            },
            h4: {
                fontSize: "$md",
                fontWeight: "$medium"
            },
            h5: {
                fontSize: "$sm",
                fontWeight: "$medium"
            },
            h6: {
                fontSize: "$xsm",
                fontWeight: "$medium"
            },
            p: {
                fontSize: "$md",
                fontWeight: "$regular"
            },
            span: {
                fontSize: "$md",
                fontWeight: "$regular"
            },
            b: {
                fontSize: "$md",
                fontWeight: "$bold",
            },
            strong: {
                fontSize: "$md",
                fontWeight: "$bold",
            }
        },
        ...tokensToProps('color', 'colors', (value) => ({
            $$color: `$colors${value}`,
        })),

    },
    defaultVariants: {
        type: "p"
    }
});


type StyledTextProps = React.ComponentProps<typeof StyledText>
type TextElements = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "b" | "strong"

export const Text: React.FC<StyledTextProps & { as?: TextElements }> = ({
    children,
    ...rest
}) =>

    <StyledText {...rest} as={rest.as || getType(rest) || "span"}>
        {children}
    </StyledText>

const getType = (props: StyledTextProps) => typeof props.type === 'object'
    ? props.type.initial
    : props.type