{/*Example for applying Module css*/}
import React from 'react'
import style from '../myfile/MyStyles.module.css';
function Mode() {
  return (
    <div>
        <h1 className={style.heading}>This is Applying css module </h1>
        <div>
            <p className={style.paragraph}>This is paragraph in Module</p>
        </div>
    </div>
  )
}
export default Mode;