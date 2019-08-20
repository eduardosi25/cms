System.register(["@angular/core/testing", "./order-list.component"], function (exports_1, context_1) {
    "use strict";
    var testing_1, order_list_component_1;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (order_list_component_1_1) {
                order_list_component_1 = order_list_component_1_1;
            }
        ],
        execute: function () {
            describe('OrderListComponent', function () {
                var component;
                var fixture;
                beforeEach(testing_1.async(function () {
                    testing_1.TestBed.configureTestingModule({
                        declarations: [order_list_component_1.OrderListComponent]
                    })
                        .compileComponents();
                }));
                beforeEach(function () {
                    fixture = testing_1.TestBed.createComponent(order_list_component_1.OrderListComponent);
                    component = fixture.componentInstance;
                    fixture.detectChanges();
                });
                it('should create', function () {
                    expect(component).toBeTruthy();
                });
            });
        }
    };
});
//# sourceMappingURL=order-list.component.spec.js.map