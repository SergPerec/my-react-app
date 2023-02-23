import React from 'react'
import Button from './Button'
import TextInput from './TextInput'

export default function Wrapper() {
	return (
		<div className='wrapper'>
			<form className='form' action="#">
				<TextInput />
				<Button />
			</form>
		</div>
	)
}
