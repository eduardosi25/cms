System.register(["@angular/core", "@angular/common", "./orders-routing.module", "./components/order-list.component"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var core_1, common_1, orders_routing_module_1, order_list_component_1, OrdersModule;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (orders_routing_module_1_1) {
                orders_routing_module_1 = orders_routing_module_1_1;
            },
            function (order_list_component_1_1) {
                order_list_component_1 = order_list_component_1_1;
            }
        ],
        execute: function () {
            OrdersModule = /** @class */ (function () {
                function OrdersModule() {
                }
                OrdersModule = __decorate([
                    core_1.NgModule({
                        declarations: [order_list_component_1.OrderListComponent],
                        imports: [
                            common_1.CommonModule,
                            orders_routing_module_1.OrdersRoutingModule
                        ]
                    })
                ], OrdersModule);
                return OrdersModule;
            }());
            exports_1("OrdersModule", OrdersModule);
        }
    };
});
//# sourceMappingURL=orders.module.js.map