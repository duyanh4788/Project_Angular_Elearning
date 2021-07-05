import { Injectable } from '@angular/core';
import { ApiService } from '@service/dataService/api.service';
import { Observable } from 'rxjs';
import { CourseManager } from '../../../models/courseManager';

@Injectable({
    providedIn: 'root'
})
export class EditcoursemanagerService {

    // refactor service => DataService services/dataService/data.service.ts
    constructor(private apiService: ApiService) { }

}
