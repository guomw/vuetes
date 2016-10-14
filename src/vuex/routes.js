import Home from '../components/Home';
import MyCenter from '../components/MyCenter';
import Cart from '../components/Cart';
import Classify from '../components/Classify';

import FindCenter from '../components/FindCenter';
import FindTab1 from '../components/findtoptabs/FindTab1';
import FindTab2 from '../components/findtoptabs/FindTab2';
import FindTab3 from '../components/findtoptabs/FindTab3';
import FindTab4 from '../components/findtoptabs/FindTab4';

export default {
    getRoutes: function () {
        var routes = [
            { path: '/', component: Home },
            { path: '/home', component: Home },
            { path: '/cfy', component: Classify },
            { path: '/cart', component: Cart },
            { path: '/my', component: MyCenter },
            {
                path: '/index',
                component: FindCenter,
                children: [
                    {
                        path: "tab1",
                        component: FindTab1
                    },
                    {
                        path: "tab2",
                        component: FindTab2
                    },
                    {
                        path: "tab3",
                        component: FindTab3
                    },
                    {
                        path: "tab4",
                        component: FindTab4
                    }
                ]
            }
        ]
        return routes;
    }
}

