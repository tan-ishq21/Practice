"use client";
import React, { useRef, useState } from 'react'
import classes from "./image-picker.module.css"
import Image from 'next/image';
const MealsImagePicker = ({label, name}) => {
    const [pickedImage, setPickedImage] = useState();
    const imageInput = useRef();
    function handlePickImage(){
        imageInput.current.click();
    }
    function handleImageChange(event){
        const file = event.target.files[0];
        if(!file){
            return;
        }
        const fileReader = new FileReader();
        fileReader.onload = () => {
            setPickedImage(fileReader.result);
        };

        fileReader.readAsDataURL(file);
    }
  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
            {pickedImage ? <Image src={pickedImage} alt='Image Selected by user' fill/> : <p>No Image Picked Yet</p>}
        </div>
        <input
            className={classes.input} 
            type="file" 
            id={name} 
            accept='image/jpg, image/jpeg, image/png' 
            name={name}
            ref={imageInput}
            onChange={handleImageChange}
        />
        <button
            className={classes.button} 
            type='button'
            onClick={handlePickImage}>
            Pick an Image
        </button>
      </div>
    </div>
  )
}

export default MealsImagePicker
