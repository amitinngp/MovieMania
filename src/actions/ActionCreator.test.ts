import moxios from 'moxios';
import { MovieState } from './../store/ConfigureStore';
import { fetchMovie, fetchMovies } from './ActionCreator';
import { movieTestStore } from './../store/StoreTest';
import { Movie } from '../model/Movie';
import { MovieActionType } from './Actions';
import {Dispatch} from 'redux';
import { setFetchURL } from '../store/Constant';

describe('#Action Creator', () => {
    let movies: Movie[];
    let movie: Movie[];
    
    beforeEach(() => {
        moxios.install();
        movies = [{ Title: 'Iron Man', imdbID: '1' }, { Title: 'Iron Man 2', imdbID: '1' }, { Title: 'Iron Man 3', imdbID: '1' }];
        movie = [{Title:"Iron Man",id:'1'}];
    })

    afterEach(() => {
        moxios.uninstall();
    })
    describe('#Fetch Movie', () => {
        it('Should have moxis installed!!', async() => {
            expect(moxios).not.toBe(null);
            expect(moxios.install).not.toBe(null);
            expect(moxios.uninstall).not.toBe(null);
            expect(moxios.withMock).not.toBe(null);
        })
        it('Should call with s= in URL',async(done:Function)=>{
            const movieState: MovieState = {
                movies: movies,
                isLoading:{loading:false},
            };
            
            const searchText = "Man";
            const dispatchMock = <Dispatch<MovieActionType>> jest.fn();
            moxios.withMock(()=>{
                const thunk = fetchMovies('Man');
                thunk(dispatchMock);
                moxios.wait(()=>{
                   
                    const request = moxios.requests.mostRecent();
                    request.respondWith({
                        status: 200,
                        response: movieState.movies
                    }).then(()=>{
                        expect(request.url).toEqual(setFetchURL(searchText,"s"));
                        expect(dispatchMock).toBeCalled();
                        done();
                    });
                })
            });
        });
        it('Should call with i= in URL',async(done:Function)=>{
            const movieState: MovieState = {
                movies: movie,
                isLoading:{loading:false},
            };
            const id = '1';
            const dispatchMock = <Dispatch<MovieActionType>> jest.fn();
            moxios.withMock(()=>{
                const thunk = fetchMovie(id);
                thunk(dispatchMock);
                moxios.wait(()=>{
                   
                    const request = moxios.requests.mostRecent();
                    // eslint-disable-next-line jest/valid-expect-in-promise
                    request.respondWith({
                        status: 200,
                        response: movieState.movies
                    }).then(()=>{
                        expect(request.url).toEqual(setFetchURL(id,"i"));
                        expect(dispatchMock).toBeCalled();
                        done();
                    });
                })
            });
        });
        it('Should do [fetchMovies] and dispatch action and update state in store', async(done:Function) => {
            
            const movieState: MovieState = {
                movies: movies,
                isLoading:{loading:false},
            };
            const movieStore = movieTestStore(movieState);
            expect(movieStore).not.toBe(null);

            moxios.wait(() => {
                const request = moxios.requests.mostRecent();
                request.respondWith({
                    status: 200,
                    response: movieState.movies
                })
            });
            return movieStore.dispatch(fetchMovies('Man'))
                .then(() => {
                    expect(movieStore.getState().movies).toBe(movieState.movies);
                    expect(movieStore.getState().movies).toStrictEqual(movieState.movies);
                    done();
                })
        });

        it('Should fetch data for movie details, update state in store', async(done:Function) => {
            const movieState: MovieState = {
                movies: movie,
                isLoading:{loading:false},
            };
            const movieStore = movieTestStore(movieState);
            expect(movieStore).not.toBe(null);

            moxios.wait(() => {
                const request = moxios.requests.mostRecent();
                request.respondWith({
                    status: 200,
                    response: movieState.movies
                })
            });
            return movieStore.dispatch(fetchMovie('1'))
                .then(() => {
                    expect(movieStore.getState().movies).toEqual(movieState.movies);
                    done();
                })
        });
        
        

    });

});