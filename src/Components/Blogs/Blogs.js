import React from 'react';

const Blogs = () => {
    return (
        <section class="text-gray-600 body-font">
            <div class="container px-5 py-24 mx-auto">
            <h1 className='text-center text-sky-800 uppercase text-3xl font-bold my-8'>My Blogs <div className='w-24 h-1 bg-sky-800 rounded-lg mx-auto mt-2'></div></h1>
                <div class="flex flex-wrap -m-4">
                    <div class="p-4 lg:w-1/3">
                        <div class="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden relative">
                            <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
                            <h1 class="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Difference between javascript and nodejs:</h1>
                            <p class="leading-relaxed mb-3"><strong>JavaScript </strong> <br />
                                1. JS is a programming language. We use it mostly to write scripts on a website that makes web pages more dynamic in nature. <br />
                                2. Js runs only on the browser. <br />
                                3. JS runs mostly on the client-side. So, it is used in the development of the front end. <br />
                                <strong>Node.js </strong><br />
                                1. Node.js is a runtime environment for Javascript that lets a user run this programming language on the server-side as well.<br />
                                2. NodeJS helps us run JS outside the browser as well. <br />
                                3. Node.js  runs on the server-side. So, it helps in the server-side development via JS.</p>
                            <div class="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
                                <span class="text-gray-400 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                                    <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                        <circle cx="12" cy="12" r="3"></circle>
                                    </svg>9.2K
                                </span>
                                <span class="text-gray-400 inline-flex items-center leading-none text-sm">
                                    <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                    </svg>5
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="p-4 lg:w-1/3">
                        <div class="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden relative">
                            <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
                            <h1 class="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Differences between sql and nosql databases: </h1>
                            <p class="leading-relaxed mb-3"><strong>SQL</strong><br />
                                1. SQL databases are basically called RDBMS or Relational Databases.<br />
                                2. SQL structured query language (SQL).<br />
                                3. Oracle, Postgres, and MS-SQL are SQL Databases.<br />
                                <strong>NoSQL </strong><br />
                                1. NoSQL databases are basically called Non-relational or distributed databases.<br />
                                2. NoSQL is no declarative query language.<br />
                                3. MongoDB, Redis, Neo4j, Cassandra, and Hbase are NoSQL Databases.</p>

                            <div class="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
                                <span class="text-gray-400 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                                    <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                        <circle cx="12" cy="12" r="3"></circle>
                                    </svg>1.2K
                                </span>
                                <span class="text-gray-400 inline-flex items-center leading-none text-sm">
                                    <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                    </svg>10
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="p-4 lg:w-1/3">
                        <div class="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden relative">
                            <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
                            <h1 class="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">What is the purpose of jwt and how does it work?</h1>
                            <p class="leading-relaxed mb-3">JWT means JSON Web Token which is an open standard used to share security information between two parties — a client and a server. Each and every JWT contains encoded JSON objects, including a set of claims. These are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued. The main purpose of using JWT is not to hide data but to ensure the authenticity of the data. The Structure of JWT is header.payload.signature.</p>

                            <div class="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
                                <span class="text-gray-400 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                                    <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                        <circle cx="12" cy="12" r="3"></circle>
                                    </svg>4.2K
                                </span>
                                <span class="text-gray-400 inline-flex items-center leading-none text-sm">
                                    <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                    </svg>6
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Blogs;