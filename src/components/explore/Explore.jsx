import React, { useEffect, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { Link } from 'react-router-dom'
import ProjectCard from "../projects/ProjectCard";
import { projectData } from "../utils";
import { FaArrowRight } from "react-icons/fa";


const filterTexts = ['All', 'Movie', 'Portfolio', 'Resturant', 'Clone', 'Custom']

export default function Explore() {
    const [selectedFilterTexts, setSelectedFilterTexts] = useState('All');
    const [searchQueries, setSearchQueries] = useState('');
    const [data, setData] = useState(projectData);
    const [queriesData, setQueriesData] = useState(data);

    const filterSearchQueries = () => {
        let filterData
        if (searchQueries === '') {
            return setData(queriesData)
        }
        else {
            filterData = queriesData.filter((project) =>
                project.title.toLowerCase().includes(searchQueries.toLowerCase()))
        }
        setData(filterData)
    }
    const filterByCategory = () => {
        if (selectedFilterTexts === 'All') setData(projectData);
        else {
            let categoryData = []
            categoryData = projectData.filter(project => project.category === selectedFilterTexts.toLowerCase())
            setData(categoryData)
            setQueriesData(categoryData)
        }
    }
    useEffect(() => {
        filterByCategory()
    }, [selectedFilterTexts])

    useEffect(() => {
        filterSearchQueries()
    }, [searchQueries])


    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }, [])

    return (
        <div className="h_w-full flex flex-col  pl-10 pr-10">
            <div className="my-10">
                <h1 className="text-white text-4xl font-bold mb-5 mt-4">Explore my best <strong className="text-green font-normal">Projects</strong>.</h1>
                <Link to='/' className="py-2 mt-4 inline-flex gap-2 items-center px-4 rounded-2xl text-white bg-green"><span className='rotate-180'><FaArrowRight /></span> Go Back</Link>
            </div>
            <div className="flex justify-between max-md:flex-col h-full p-5 w-full">
                <div className="relative mb-5">
                    <input type="text" placeholder="Search Projects" className="py-2 rounded-md bg-dark pl-11 pr-11 w-80  text-white outline-none max-md:w-full border border-gray-700 focus:border-green focus:ring-2 focus:ring-green " onChange={(e) => { setSearchQueries(e.target.value) }} value={searchQueries} />
                    <span className="absolute left-2 top-2 p-1 bg-gray-800"><IoIosSearch size={18} color="white" /></span>
                    {searchQueries.length > 0 && <span className="absolute right-2 top-2 p-1 bg-gray-800" onClick={() => setSearchQueries('')}><RxCross2 size={18} color="white" /></span>}
                </div>
                <div>
                    <div className="text-black flex  gap-2 flex-wrap">
                        {filterTexts?.map((texts, index) => <button className={`py-2.5 transitions px-4 max-md:text-sm rounded-sm  ${selectedFilterTexts === texts ? 'bg-green' : 'bg-gray-800 text-white'}`} onClick={() => setSelectedFilterTexts(texts)} title={texts + ' Websites'} key={index}>{texts}</button>)}
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap max-md:justify-center max-md:items-center">
                {data.map((item, index) => (
                    <ProjectCard index={index / 1.5} item={item} key={index} />
                ))

                }
            </div>
        </div>
    )
}
