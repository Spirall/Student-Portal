/**  Created by Marvine Bamba on 2017/08/13. */
import { trigger, style, transition, animate, keyframes, query } from '@angular/animations';

export const fadeInAnimation = [
    [
        trigger('PageEntered', [
            transition('* => *', [
                query('*', animate('1.1s ease-in', keyframes([
                    style({opacity: 0 }),
                    style({opacity: 1 }),
                ])), {optional: true})
            ])
        ]),
    ]
];

export const fadeInAndOutAnimation = [
    [
        trigger('PageLeave', [
            transition('* => *', [
                query('*', animate('1.1s ease-in', keyframes([
                    style({opacity: 1 }),
                    style({opacity: 0 }),
                ])), {optional: true})
            ])
        ]),
    ]
];
