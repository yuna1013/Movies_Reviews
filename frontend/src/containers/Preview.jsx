// import React, { useEffect, useState } from 'react';
// import API from '../API';
// import Card from '../components/common/Card';
// import Footer from '../components/common/Footer';
// import Header from '../components/common/Header';
// import preview from '../assets/img/mp.png';
// import cross from '../assets/img/cross.png';
// import previewbtn from '../assets/img/preview-btn.png';
// import star from '../assets/img/star.png';
// import { useDispatch } from 'react-redux';
// import { push } from 'connected-react-router';

// const api = new API();
// const Preview = () => {
//     const [categoryAction, setCategoryAction] = useState(null);
//     const [categoryComedy, setCategoryComedy] = useState(null);
//     const [categoryDrama, setCategoryDrama] = useState(null);
//     const [categoryHorror, setCategoryHorror] = useState(null);
//     const [preview, setPreview] = useState(null);
//     const dispatch = useDispatch();

//     const closeButton = () => {
//         dispatch(push('/category'));
//     };
//     useEffect(() => {
//         api.getMovies({ image: '1' })
//             .then(movies => {
//                 setPreview(movies);
//             })
//             .catch(error => {
//                 alert('Failed to connect API: /movies/');
//             });
//         api.getMovies({ image: '49' })
//             .then(movies => {
//                 setCategoryComedy(movies);
//             })
//             .catch(error => {
//                 alert('Failed to connect API: /movies/');
//             });
//         api.getMovies({ image: '48' })
//             .then(movies => {
//                 setCategoryDrama(movies);
//             })
//             .catch(error => {
//                 alert('Failed to connect API: /movies/');
//             });
//         api.getMovies({ image: '47' })
//             .then(movies => {
//                 setCategoryHorror(movies);
//             })
//             .catch(error => {
//                 alert('Failed to connect API: /movies/');
//             });
//     }, []);
//     return (
//         <>
//             <Header />
//             {/* <section class="content">
//                 <section class="preview">
//                     <div class="preview_inner">
//                         <img src="." alt="" />
//                     </div>
//                 </section>
//                 <div class="pt">
//                     <h1 id="actions" class="section-heading m-20 p-10">
//                         Actions
//                     </h1>
//                 </div>
//                 {categoryAction && categoryAction.results.length > 0 ? (
//                     <div class="grid">
//                         {categoryAction.results.map(movie => (
//                             <Card movie={movie} />
//                         ))}
//                     </div>
//                 ) : (
//                     <div class="no-post">
//                         <p>No movies here yet...</p>
//                     </div>
//                 )}
//                 <hr class="divider" />
//                 <h1 id="comedy" class="section-heading m-20">
//                     Comedy
//                 </h1>
//                 {categoryComedy && categoryComedy.results.length > 0 ? (
//                     <div class="grid">
//                         {categoryComedy.results.map(movie => (
//                             <Card movie={movie} />
//                         ))}
//                     </div>
//                 ) : (
//                     <div class="no-post">
//                         <p>No movies here yet...</p>
//                     </div>
//                 )}
//                 <hr class="divider" />
//                 <h1 id="drama" class="section-heading m-20">
//                     Drama
//                 </h1>
//                 {categoryDrama && categoryDrama.results.length > 0 ? (
//                     <div class="grid">
//                         {categoryDrama.results.map(movie => (
//                             <Card movie={movie} />
//                         ))}
//                     </div>
//                 ) : (
//                     <div class="no-post">
//                         <p>No movies here yet...</p>
//                     </div>
//                 )}

//                 <hr class="divider" />
//                 <h1 id="horror" class="section-heading m-20">
//                     Horror
//                 </h1>

//                 {categoryHorror && categoryHorror.results.length > 0 ? (
//                     <div class="grid">
//                         {categoryHorror.results.map(movie => (
//                             <Card movie={movie} />
//                         ))}
//                     </div>
//                 ) : (
//                     <div class="no-post">
//                         <p>No movies here yet...</p>
//                     </div>
//                 )}
//             </section> */}
//             <section class="preview">
//                 <div class="preview-inner">
//                     <div class="preview-icon">
//                         <img src={cross} onClick={closeButton} />
//                     </div>
//                     <div class="movie-preview">
//                         <div class="images">
//                             <ul class="preview-card">
//                                 <li class="option">
//                                     <img src={preview} alt="“”" />
//                                     <p class="heading">
//                                         Shang-Chi, the master of unarmed weaponry- <br /> based Kung Fu,
//                                         <br /> is forced to confront his past after being drawn <br /> into the Ten
//                                         Rings organization.
//                                     </p>
//                                     <img class="heart" src={previewbtn} alt="" />

//                                     <div class="last">
//                                         <img class="star" src={star} alt="" />
//                                         <p class="para">4.5/10</p>
//                                     </div>
//                                 </li>
//                             </ul>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//             <Footer />
//         </>
//     );
// };

// export default Preview;
