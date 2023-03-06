import React from 'react';
import { useNavigate } from "react-router-dom";

import Screenshot from '../../assets/home/Home.png';
import './Home.css';


const Home = () => {
  const navigate = useNavigate();
  
  return (
    <div className='Home'>
        <img src={Screenshot}/>

        {/* Top section */}
        <button className='World' tabIndex={0}/>
        <button className='CrystalAdd' tabIndex={1}/>
        <button className='EnergyAdd' tabIndex={2}/>

        <button className='Menu' tabIndex={3} onClick={() =>{ navigate('/menu')}}/>

        {/* Sidebar */}
        <button className='Present' tabIndex={4}/>
        <button className='Checklist' tabIndex={5}/>
        <button className='Friend' tabIndex={6}/>

        {/* Bottom buttons */}
        <button className='Gacha' tabIndex={7}/>
        <button className='Members' tabIndex={8}/>
        <button className='Story' tabIndex={9}/>
        <button className='Live' tabIndex={10}/>

    </div>
  )
};

export default Home;