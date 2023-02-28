import classes from "./Effect-Button.module.css";

const Button = ( { onClick, name } ) =>
{
	return (
		<div className={classes.wraper}>
			<button className={classes.submit} onClick={ onClick }>{ name }</button>
			<div className={ classes.outline } />
		</div>
	)
};

export default Button;