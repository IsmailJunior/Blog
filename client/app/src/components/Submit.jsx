import classes from "./Effect.module.css";

const Submit = ( { onClick, name } ) =>
{
	return (
		<div className={classes.wraper}>
			<button className={classes.submit} onClick={ onClick }>{ name }</button>
			<div className={ classes.outline } />
		</div>
	)
};

export default Submit;