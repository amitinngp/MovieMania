import React from "react";
import { shallow } from "enzyme";
import  SearchComponent from "./search/SearchComponent";
import  HeaderBar from "./header/HeaderBar";
import CardContent from "./card/CardContent";
import DetailComponent from "./details/DetailComponent";
import NotFoundPage from "./pagenotfound/NotFoundPage";

import * as redux from 'react-redux';

describe("#All Components!!",()=>{
  it("should have input text in search component!!", ()=>{
    const spy = jest.spyOn(redux, 'useDispatch')
    spy.mockReturnValue(jest.fn());
    const spyUseSelector = jest.spyOn(redux, 'useSelector')
    spyUseSelector.mockReturnValue(jest.fn());
    let  wrapper = shallow(<SearchComponent/>);
    let component = wrapper.find(`[type="text"]`);
    expect(component.length).toBe(1);
    expect(wrapper.find(`[data-test='search-section']`).length).toBe(1);
    expect(wrapper.find(`[data-test='search-input']`).length).toBe(1);
  });
 
  it("should have HeaderBar component!!", ()=>{
    let  wrapper = shallow(<HeaderBar/>);
    expect(wrapper.find(`[data-test='header-logo']`).length).toBe(1);
    expect(wrapper.find(`[data-test='header-menus']`).length).toBe(1);
    expect(wrapper.find(`[data-test='header-li']`).length).toBe(1);
  });

  it("should have CardContent component!!", ()=>{
    const spy = jest.spyOn(redux, 'useDispatch')
    spy.mockReturnValue(jest.fn());
    const movies =  [{ Title: "Iron Man", imdbID: '1' }];
    let  wrapper = shallow(<CardContent data={movies}/>);
    expect(wrapper.find(`[data-test='content-poster']`).length).toBe(1);
    expect(wrapper.find(`[data-test='content-title']`).length).toBe(1);
    expect(wrapper.find(`[data-test='content-Year']`).length).toBe(1);
  });

   
  it("should have DetailComponent component!!", ()=>{
    const spy = jest.spyOn(redux, 'useSelector')
    spy.mockReturnValue(jest.fn());
    let  wrapper = shallow(<DetailComponent/>);
    expect(wrapper.find(`[data-test='details-poster']`).length).toBe(1);
    expect(wrapper.find(`[data-test='details-title']`).length).toBe(1);
    expect(wrapper.find(`[data-test='details-Year']`).length).toBe(1);
    expect(wrapper.find(`[data-test='details-Actors']`).length).toBe(1);
    expect(wrapper.find(`[data-test='details-Plot']`).length).toBe(1);
    expect(wrapper.find(`[data-test='details-Genre']`).length).toBe(1);
    expect(wrapper.find(`[data-test='details-Director']`).length).toBe(1);
  });
  it("should have NotFoundPage component!!", ()=>{
    let  wrapper = shallow(<NotFoundPage/>);
    expect(wrapper.find(`[data-test='img-poster']`).length).toBe(1);
  });
  
});

