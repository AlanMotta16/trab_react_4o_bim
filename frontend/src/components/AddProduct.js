import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const AddProduct = () => {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const navigate = useNavigate();

    const saveProduct = async (e) => {
        e.preventDefault();
        await axios.post(`http://localhost:5000/products`,{
            title:title,
            price:price
        });
        navigate('/');
        
    }
    
    
    return (

        <div>
            <form onSubmit={ saveProduct }>
                <div className="field">
                    <div class="mb-2">
                        <label className="form-label">Title</label>

                        <input className="form-control"
                            type = "text"
                            placeholder="Title"
                            value = { title }
                            onChange={ (e) => setTitle(e.target.value) }
                        />
                    </div>
                </div>


                <div className="field">
                    <div class="mb-2">


                        <label className="form-label">Price</label>

                        <input className="form-control"
                            type = "text"
                            placeholder="Price"
                            value = { price }
                            onChange={ (e) => setPrice(e.target.value) }
                        />
                    </div>
                </div>


                <div className="field">
                    <button className="button is-primary">Save</button>
                </div>
                
            </form>

        </div>

    );

}

export default AddProduct;