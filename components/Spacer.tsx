
import { styled } from '../stitches.config'
import { tokensToProps } from '../utils/stitches.helpers'

const Spacer = styled('div', {
    $$size: '$space$md',

    variants: {
        ...tokensToProps('size', 'space', (value) => ({
            $$size: `$space${value}`,
        })),
        dir: {
            horizontal: { width: '$$size', height: '0' },
            vertical: { height: '$$size', width: '0' },
        },
    },
    defaultVariants: {
        dir: 'vertical',
    },
})

export default Spacer