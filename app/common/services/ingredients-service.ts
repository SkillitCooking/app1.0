import {Injectable} from 'angular2/core';
import {BackendService} from './backend-service';

@Injectable()
export class IngredientsService {

  backendService: BackendService;

  constructor(backendService: BackendService) {
    this.backendService = backendService;

  }

  getIngredientTypes() {
    return this.backendService.getIngredientTypes();
  }
}