import arrow from './assets/arrow.png'
import css from './arrow.module.css'
const Arrow = ({direction}) => {
return <img src={arrow} alt="arrow" className={ direction === 'right' ?css.right: css.left} />
}
export default Arrow