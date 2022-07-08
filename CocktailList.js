import React, { useEffect } from "react";
import { useRef, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { fetchSearchCocktail } from "../actions/action"; 
import { Link } from "react-router-dom";
import { fetchCocktails } from "../actions/action"



function CocktailList() {
    const searchValue = useRef();
    const { cocktails, loading } = useSelector((state) => ({ ...state.app }))
    const [modifiedCocktail, setmodifiedCocktail] = useState([]);
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(fetchCocktails());
    }, []);

    useEffect(() => {
        if (cocktails) {
            const newCocktails =  cocktails.map((item) => {
                const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } = item;
                return {
                    id: idDrink,
                    name: strDrink,
                    image: strDrinkThumb,
                    info: strAlcoholic,
                    glass: strGlass,
                };
            });
            setmodifiedCocktail(newCocktails)
        } else {
            setmodifiedCocktail([]);
        }
    }, [cocktails]);
    if (loading) {
        return (
            <div>loading...</div>
        );
    }


    const handleChange = () => {
        const searchText = searchValue.current.value;
        dispatch(fetchSearchCocktail({ searchText }));
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
    };




    return (
        <div className="CocktailList">
            <input type="search" className="search" placeholder="Enter cocktail" ref={searchValue} onChange={handleChange}></input>
            <button onSubmit={handleSubmit}>Search</button>
            {modifiedCocktail.map((item) => {
                const { id, name, image, glass, info } = item;
                return (
                    <div className="card" key={id}>
                        <img src={image} alt={name}></img>
                        <h2 >{name}</h2>
                        <h4>{glass}</h4>
                        <p>{info}</p>
                        <Link to="/DetailedView/" >
                            <button>Details</button>
                        </Link>
                    </div>
                )
            })}
            
        </div>

    );
}

export default CocktailList;