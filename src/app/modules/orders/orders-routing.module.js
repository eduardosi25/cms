System.register(["@angular/core", "@angular/router", "./components/order-list.component"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var core_1, router_1, order_list_component_1, routes, OrdersRoutingModule;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (order_list_component_1_1) {
                order_list_component_1 = order_list_component_1_1;
            }
        ],
        execute: function () {
            routes = [
                {
                    path: '',
                    component: order_list_component_1.OrderListComponent
                }
            ];
            OrdersRoutingModule = /** @class */ (function () {
                function OrdersRoutingModule() {
                }
                OrdersRoutingModule = __decorate([
                    core_1.NgModule({
                        imports: [router_1.RouterModule.forChild(routes)],
                        exports: [router_1.RouterModule]
                    })
                ], OrdersRoutingModule);
                return OrdersRoutingModule;
            }());
            exports_1("OrdersRoutingModule", OrdersRoutingModule);
        }
    };
});
//# sourceMappingURL=orders-routing.module.js.map