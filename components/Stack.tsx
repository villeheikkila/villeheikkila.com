import { styled } from '../stitches.config'
import { tokensToProps } from '../utils/stitches.helpers'

export const Stack = styled('div', {
    $$gap: '$space$md',
    display: 'flex',
    justifyContent: 'flex-start',

    '> *': {
        marginTop: 0,
        marginBottom: 0,
    },

    variants: {
        ...tokensToProps('gap', 'space', (value) => ({
            $$gap: `$space${value}`,
        })),
        dir: {
            vertical: {
                flexDirection: 'column',

                '> * + *': {
                    marginTop: '$$gap',
                },
            },
            horizontal: {
                '> * + *': {
                    marginLeft: '$$gap',
                },
            },
        },
    },
    defaultVariants: {
        dir: 'vertical',
    },
})

export default Stack