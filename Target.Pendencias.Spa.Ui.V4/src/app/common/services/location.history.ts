﻿import { Injectable } from '@angular/core';

import { CacheService } from './cache.service';
import { ECacheType } from 'app/common/type-cache.enum';

@Injectable()
export class LocationHistoryService {

    public static saveLocal(resourceName: string) {
        CacheService.add("lastNavigation", resourceName, ECacheType.COOKIE, 1);
    }

    public static getLastNavigation(key: string) {
        return CacheService.get("lastNavigation", ECacheType.COOKIE)
    }
}
