import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const baseUrl = 'http://localhost:8080/api/tutorials';
const baseUrl1 = 'http://localhost:3000/api/freezes';
const freezeurl = 'http://localhost:3000/api/freezes/5eec8d3df7f6936274c22ec8';

@Injectable({
  providedIn: 'root'
})
export class TutorialService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(baseUrl);
  }

  get(id) {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data) {
    return this.http.post(baseUrl, data);
  }

  update(id, data) {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id) {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll() {
    return this.http.delete(baseUrl);
  }

  findByname(name) {
    return this.http.get(`${baseUrl}?name=${name}?`);
  }

  //freeze
  getAll1() {
    return this.http.get(baseUrl1);
  }

  get1(id) {
    return this.http.get(`${baseUrl1}/${id}`);
  }

  create1(data1) {
    return this.http.post(baseUrl1, data1);
  }

  update1(id, data) {
    return this.http.put(`${baseUrl1}/${id}`, data);
  }

  delete1(id) {
    return this.http.delete(`${baseUrl1}/${id}`);
  }

  deleteAll1() {
    return this.http.delete(baseUrl1);
  }

  findByname1(fday) {
    return this.http.get(`${baseUrl1}?fday=${fday}?`);
  }
  findByfday() {
    return this.http.get(freezeurl);
  }
}
