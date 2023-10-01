import React from 'react';
import { useForm } from 'react-hook-form';
import './addpost.css';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const AddPost = () => {
    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();
    return (
        <div className='addpost commonBgStyle'>
            <h3 className="title">Add Post</h3>
            <div className="blog-input">
                <div>
                    <label for="fname">Post Title</label>
                    <input type="text" {...register("title", { required: true })} name="title" placeholder='Post name' />
                </div>

                <div>
                    <label for="fname">Select Category</label>
                    <select name="category" id="category" {...register("category", { required: true })}>
                        <option value="" selected>Category</option>
                        <option value="t-shirt">T-shirt</option>
                        <option value="women t-shirt">women t-shirt</option>
                        <option value="kids">Kids</option>
                        <option value="fashion">Fashion</option>
                    </select>
                </div>

                <div>
                    <label for="author">Author</label>
                    <input type="text" {...register("author", { required: true })} name="author" placeholder='Author' />
                </div>

                <div>
                    <label for="url">Post Url</label>
                    <input type="text" {...register("postUrl", { required: true })} name="postUrl" placeholder='Post Url' />
                </div>

                <div>
                    <label for="image">Upload Image</label>
                    <div className="fileInput">
                        <CloudUploadIcon />
                        <h3>Drop files here or click to upload.</h3>
                        <input type="file" id="image" name="image" {...register("image", { required: true })} />
                    </div>
                </div>

                <div>
                  <label for="image">Discription</label>
                  <textarea name="description" id="" cols="30" rows="5" {...register("description", { required: true })}></textarea>
                </div> 
                {errors.exampleRequired && <span>This field is required</span>}
                <input type="submit" id="submitBtn" />
            </div>
        </div>
    );
};

export default AddPost;



