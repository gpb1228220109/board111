!function (e) {
    function t(i) {
        if (n[i]) return n[i].exports;
        var a = n[i] = {exports: {}, id: i, loaded: !1};
        return e[i].call(a.exports, a, a.exports, t), a.loaded = !0, a.exports
    }

    var n = {};
    return t.m = e, t.c = n, t.p = "/static/", t(0)
}(function (e) {
    for (var t in e) if (Object.prototype.hasOwnProperty.call(e, t)) switch (typeof e[t]) {
        case"function":
            break;
        case"object":
            e[t] = function (t) {
                var n = t.slice(1), i = e[t[0]];
                return function (e, t, a) {
                    i.apply(this, [e, t, a].concat(n))
                }
            }(e[t]);
            break;
        default:
            e[t] = e[e[t]]
    }
    return e
}([function (e, t, n) {
    e.exports = n(99)
}, function (e, t) {
}, 1, 1, 1, 1, function (e, t) {
    e.exports = " <section ng-form name=assignCustomerConfigForm layout=column> <md-input-container class=md-block> <label translate>tb.rulenode.customer-name-pattern</label> <input ng-required=true name=customerNamePattern ng-model=configuration.customerNamePattern> <div ng-messages=assignCustomerConfigForm.customerNamePattern.$error> <div ng-message=required translate>tb.rulenode.customer-name-pattern-required</div> </div> <div class=tb-hint translate>tb.rulenode.customer-name-pattern-hint</div> </md-input-container> <md-checkbox aria-label=\"{{ 'tb.rulenode.create-group-if-not-exists' | translate }}\" ng-model=configuration.createCustomerIfNotExists>{{ 'tb.rulenode.create-customer-if-not-exists' | translate }} </md-checkbox> <md-input-container class=md-block> <label translate>tb.rulenode.customer-cache-expiration</label> <input type=number step=1 min=0 ng-required=true name=customerCacheExpiration ng-model=configuration.customerCacheExpiration> <div ng-messages=assignCustomerConfigForm.customerCacheExpiration.$error> <div translate ng-message=required>tb.rulenode.customer-cache-expiration-required</div> <div translate ng-message=min>tb.rulenode.customer-cache-expiration-range</div> </div> <div class=tb-hint translate>tb.rulenode.customer-cache-expiration-hint</div> </md-input-container> </section> "
}, function (e, t) {
    e.exports = ' <section ng-form name=attributesConfigForm layout=column> <md-input-container class=md-block> <label translate>attribute.attributes-scope</label> <md-select ng-model=configuration.scope ng-disabled=$root.loading> <md-option ng-repeat="scope in types.attributesScope" ng-value=scope.value> {{scope.name | translate}} </md-option> </md-select> </md-input-container> </section> '
}, function (e, t) {
    e.exports = " <section class=tb-alarm-config ng-form name=alarmConfigForm layout=column> <label translate class=\"tb-title no-padding\">tb.rulenode.alarm-details-builder</label> <tb-js-func ng-model=configuration.alarmDetailsBuildJs function-name=Details function-args=\"{{ ['msg', 'metadata', 'msgType'] }}\" no-validate=true> </tb-js-func> <div layout=row style=padding-bottom:15px> <md-button ng-click=testDetailsBuildJs($event) class=\"md-primary md-raised\"> {{ 'tb.rulenode.test-details-function' | translate }} </md-button> </div> <md-input-container class=md-block> <label translate>tb.rulenode.alarm-type</label> <input ng-required=true name=alarmType ng-model=configuration.alarmType> <div ng-messages=alarmConfigForm.alarmType.$error> <div ng-message=required translate>tb.rulenode.alarm-type-required</div> </div> <div class=tb-hint translate>tb.rulenode.entity-type-pattern-hint</div> </md-input-container> </section> "
}, function (e, t) {
    e.exports = " <section class=tb-alarm-config ng-form name=alarmConfigForm layout=column> <label translate class=\"tb-title no-padding\">tb.rulenode.alarm-details-builder</label> <tb-js-func ng-model=configuration.alarmDetailsBuildJs function-name=Details function-args=\"{{ ['msg', 'metadata', 'msgType'] }}\" no-validate=true> </tb-js-func> <div layout=row style=padding-bottom:15px> <md-button ng-click=testDetailsBuildJs($event) class=\"md-primary md-raised\"> {{ 'tb.rulenode.test-details-function' | translate }} </md-button> </div> <md-checkbox aria-label=\"{{ 'tb.rulenode.use-metadata-interval-patterns' | translate }}\" ng-model=configuration.useMessageAlarmData>{{ 'tb.rulenode.use-message-alarm-data' | translate }} </md-checkbox> <section layout=column layout-gt-sm=row ng-if=!configuration.useMessageAlarmData> <md-input-container flex class=md-block> <label translate>tb.rulenode.alarm-type</label> <input ng-required=true name=alarmType ng-model=configuration.alarmType> <div ng-messages=alarmConfigForm.alarmType.$error> <div ng-message=required translate>tb.rulenode.alarm-type-required</div> </div> </md-input-container> <md-input-container flex class=md-block> <label translate>tb.rulenode.alarm-severity</label> <md-select required name=severity ng-model=configuration.severity> <md-option ng-repeat=\"(severityKey, severity) in types.alarmSeverity\" ng-value=severityKey> {{ severity.name | translate}} </md-option> </md-select> <div ng-messages=alarmConfigForm.severity.$error> <div ng-message=required translate>tb.rulenode.alarm-severity-required</div> </div> </md-input-container> </section> <section layout=column layout-gt-sm=row ng-if=!configuration.useMessageAlarmData> <md-checkbox aria-label=\"{{ 'tb.rulenode.propagate' | translate }}\" ng-model=configuration.propagate>{{ 'tb.rulenode.propagate' | translate }} </md-checkbox> </section> </section> "
}, function (e, t) {
    e.exports = " <section ng-form name=createRelationConfigForm layout=column style=min-width:650px> <md-input-container class=md-block style=min-width:100px> <label translate>relation.direction</label> <md-select required ng-model=configuration.direction> <md-option ng-repeat=\"direction in types.entitySearchDirection\" ng-value=direction> {{ ('relation.search-direction.' + direction) | translate}} </md-option> </md-select> </md-input-container> <div layout=row class=tb-entity-select> <md-input-container class=md-block> <tb-entity-type-select style=min-width:100px the-form=createRelationConfigForm tb-required=true ng-model=configuration.entityType> </tb-entity-type-select> </md-input-container> <md-input-container class=md-block flex ng-if=configuration.entityType style=margin-top:38px> <label translate>tb.rulenode.entity-name-pattern</label> <input ng-required=true name=entityNamePattern ng-model=configuration.entityNamePattern> <div ng-messages=createRelationConfigForm.entityNamePattern.$error> <div ng-message=required translate>tb.rulenode.entity-name-pattern-required</div> </div> <div class=tb-hint translate>tb.rulenode.entity-name-pattern-hint</div> </md-input-container> <md-input-container class=md-block flex ng-if=\"configuration.entityType  == 'DEVICE' || configuration.entityType  == 'ASSET'\" style=margin-top:38px> <label translate>tb.rulenode.entity-type-pattern</label> <input ng-required=true name=entityTypePattern ng-model=configuration.entityTypePattern> <div ng-messages=createRelationConfigForm.entityTypePattern.$error> <div ng-message=required translate>tb.rulenode.entity-type-pattern-required</div> </div> <div class=tb-hint translate>tb.rulenode.entity-type-pattern-hint</div> </md-input-container> </div> <md-input-container class=md-block flex style=margin-top:0> <label translate>tb.rulenode.relation-type-pattern</label> <input ng-required=true name=relationType ng-model=configuration.relationType> <div ng-messages=createRelationConfigForm.relationType.$error> <div ng-message=required translate>tb.rulenode.relation-type-pattern-required</div> </div> <div class=tb-hint translate>tb.rulenode.relation-type-pattern-hint</div> </md-input-container> <md-checkbox flex ng-if=\"configuration.entityType  == 'CUSTOMER' || configuration.entityType  == 'ASSET' || configuration.entityType  == 'DEVICE'\" aria-label=\"{{ 'tb.rulenode.create-entity-if-not-exists' | translate }}\" ng-model=configuration.createEntityIfNotExists>{{ 'tb.rulenode.create-entity-if-not-exists' | translate }} </md-checkbox> <div class=tb-hint ng-if=\"configuration.entityType  == 'CUSTOMER' || configuration.entityType  == 'ASSET' || configuration.entityType  == 'DEVICE'\" translate>tb.rulenode.create-entity-if-not-exists-hint</div> <md-checkbox flex aria-label=\"{{ 'tb.rulenode.remove-current-relations' | translate }}\" ng-model=configuration.removeCurrentRelations>{{ 'tb.rulenode.remove-current-relations' | translate }} </md-checkbox> <div class=tb-hint translate>tb.rulenode.remove-current-relations-hint</div> <md-checkbox flex aria-label=\"{{ 'tb.rulenode.change-originator-to-related-entity' | translate }}\" ng-model=configuration.changeOriginatorToRelatedEntity>{{ 'tb.rulenode.change-originator-to-related-entity' | translate }} </md-checkbox> <div class=tb-hint translate>tb.rulenode.change-originator-to-related-entity-hint</div> <md-input-container class=md-block> <label translate>tb.rulenode.entity-cache-expiration</label> <input type=number step=1 min=0 ng-required=true name=entityCacheExpiration ng-model=configuration.entityCacheExpiration> <div ng-messages=createRelationConfigForm.entityCacheExpiration.$error> <div translate ng-message=required>tb.rulenode.entity-cache-expiration-required</div> <div translate ng-message=min>tb.rulenode.entity-cache-expiration-range</div> </div> <div class=tb-hint translate>tb.rulenode.entity-cache-expiration-hint</div> </md-input-container> </section> "
}, function (e, t) {
    e.exports = " <section ng-form name=deleteRelationConfigForm layout=column> <md-checkbox aria-label=\"{{ 'tb.rulenode.delete-relation-to-specific-entity' | translate }}\" ng-model=configuration.deleteForSingleEntity> {{ 'tb.rulenode.delete-relation-to-specific-entity' | translate }} </md-checkbox> <div class=tb-hint translate>tb.rulenode.delete-relation-hint</div> <md-input-container class=md-block style=min-width:100px;margin-bottom:38px> <label translate>relation.direction</label> <md-select required ng-model=configuration.direction> <md-option ng-repeat=\"direction in types.entitySearchDirection\" ng-value=direction> {{ ('relation.search-direction.' + direction) | translate}} </md-option> </md-select> </md-input-container> <div layout=row class=tb-entity-select ng-if=configuration.deleteForSingleEntity> <md-input-container class=md-block> <tb-entity-type-select style=min-width:100px the-form=deleteRelationConfigForm tb-required=true ng-model=configuration.entityType> </tb-entity-type-select> </md-input-container> <md-input-container class=md-block flex ng-if=configuration.entityType style=margin-top:38px> <label translate>tb.rulenode.entity-name-pattern</label> <input ng-required=true name=entityNamePattern ng-model=configuration.entityNamePattern> <div ng-messages=deleteRelationConfigForm.entityNamePattern.$error> <div ng-message=required translate>tb.rulenode.entity-name-pattern-required</div> </div> <div class=tb-hint translate>tb.rulenode.entity-name-pattern-hint</div> </md-input-container> </div> <md-input-container class=md-block flex> <label translate>tb.rulenode.relation-type-pattern</label> <input ng-required=true name=relationType ng-model=configuration.relationType> <div ng-messages=createRelationConfigForm.relationType.$error> <div ng-message=required translate>tb.rulenode.relation-type-pattern-required</div> </div> <div class=tb-hint translate>tb.rulenode.relation-type-pattern-hint</div> </md-input-container> <md-input-container class=md-block> <label translate>tb.rulenode.entity-cache-expiration</label> <input type=number step=1 min=0 ng-required=true name=entityCacheExpiration ng-model=configuration.entityCacheExpiration> <div ng-messages=deleteRelationConfigForm.entityCacheExpiration.$error> <div translate ng-message=required>tb.rulenode.entity-cache-expiration-required</div> <div translate ng-message=min>tb.rulenode.entity-cache-expiration-range</div> </div> <div class=tb-hint translate>tb.rulenode.entity-cache-expiration-hint</div> </md-input-container> </section> "
}, function (e, t) {
    e.exports = " <section class=tb-generator-config ng-form name=generatorConfigForm layout=column> <md-input-container class=md-block> <label translate>tb.rulenode.message-count</label> <input ng-required=true type=number step=1 name=messageCount ng-model=configuration.msgCount min=0> <div ng-messages=generatorConfigForm.messageCount.$error multiple=multiple md-auto-hide=false> <div ng-message=required translate>tb.rulenode.message-count-required</div> <div ng-message=min translate>tb.rulenode.min-message-count-message</div> </div> </md-input-container> <md-input-container class=md-block> <label translate>tb.rulenode.period-seconds</label> <input ng-required=true type=number step=1 name=periodInSeconds ng-model=configuration.periodInSeconds min=1> <div ng-messages=generatorConfigForm.periodInSeconds.$error multiple=multiple md-auto-hide=false> <div ng-message=required translate>tb.rulenode.period-seconds-required</div> <div ng-message=min translate>tb.rulenode.min-period-seconds-message</div> </div> </md-input-container> <div layout=column> <label class=tb-small>{{ 'tb.rulenode.originator' | translate }}</label> <tb-entity-select the-form=generatorConfigForm tb-required=false ng-model=originator> </tb-entity-select> </div> <label translate class=\"tb-title no-padding\">tb.rulenode.generate</label> <tb-js-func ng-model=configuration.jsScript function-name=Generate function-args=\"{{ ['prevMsg', 'prevMetadata', 'prevMsgType'] }}\" no-validate=true> </tb-js-func> <div layout=row> <md-button ng-click=testScript($event) class=\"md-primary md-raised\"> {{ 'tb.rulenode.test-generator-function' | translate }} </md-button> </div> </section> "
}, function (e, t) {
    e.exports = ' <section ng-form name=geoActionConfigForm layout=column> <md-input-container class=md-block> <label translate>tb.rulenode.latitude-key-name</label> <input ng-required=true name=latitudeKeyName ng-model=configuration.latitudeKeyName> <div ng-messages=geoActionConfigForm.latitudeKeyName.$error> <div ng-message=required translate>tb.rulenode.latitude-key-name-required</div> </div> </md-input-container> <md-input-container class=md-block> <label translate>tb.rulenode.longitude-key-name</label> <input ng-required=true name=longitudeKeyName ng-model=configuration.longitudeKeyName> <div ng-messages=geoActionConfigForm.longitudeKeyName.$error> <div ng-message=required translate>tb.rulenode.longitude-key-name-required</div> </div> </md-input-container> <md-checkbox flex aria-label="{{ \'tb.rulenode.fetch-perimeter-info-from-message-metadata\' | translate }}" ng-model=configuration.fetchPerimeterInfoFromMessageMetadata>{{ \'tb.rulenode.fetch-perimeter-info-from-message-metadata\' | translate }} </md-checkbox> <div layout=row class=tb-entity-select ng-if="configuration.fetchPerimeterInfoFromMessageMetadata === false"> <md-input-container class=md-block flex=100> <label translate>tb.rulenode.perimeter-type</label> <md-select required ng-model=configuration.perimeterType flex> <md-option ng-repeat="type in ruleNodeTypes.perimeterType" ng-value=type.value> {{ type.name | translate}} </md-option> </md-select> </md-input-container> </div> <div layout=row layout-wrap ng-if="configuration.perimeterType===ruleNodeTypes.perimeterType.CIRCLE.value && configuration.fetchPerimeterInfoFromMessageMetadata === false"> <div layout=column flex=50> <md-input-container class=md-block flex layout=column style=margin-top:44px> <label translate>tb.rulenode.circle-center-latitude</label> <input type=number min=0 step=0.1 ng-required=true name=centerLatitude ng-model=configuration.centerLatitude> <div ng-messages=geoActionConfigForm.centerLatitude.$error> <div ng-message=required translate>tb.rulenode.circle-center-latitude-required</div> </div> </md-input-container> </div> <div layout=column flex=50> <md-input-container class=md-block flex style=margin-top:44px> <label translate>tb.rulenode.circle-center-longitude</label> <input type=number min=0 step=0.1 ng-required=true name=centerLongitude ng-model=configuration.centerLongitude> <div ng-messages=geoActionConfigForm.centerLongitude.$error> <div ng-message=required translate>tb.rulenode.circle-center-longitude-required</div> </div> </md-input-container> </div> <div layout=column flex=50> <md-input-container class=md-block style=margin-top:28px> <label translate>tb.rulenode.range</label> <input type=number min=0 step=0.1 ng-required=true name=range ng-model=configuration.range> <div ng-messages=geoActionConfigForm.range.$error> <div ng-message=required translate>tb.rulenode.range-required</div> </div> </md-input-container> </div> <div layout=column flex=50> <md-input-container class=md-block style=margin-top:28px> <label translate>tb.rulenode.range-units</label> <md-select required ng-model=configuration.rangeUnit> <md-option ng-repeat="type in ruleNodeTypes.rangeUnit" ng-value=type.value> {{ type.name | translate}} </md-option> </md-select> </md-input-container> </div> </div> <div layout=row layout-wrap ng-if="configuration.perimeterType===ruleNodeTypes.perimeterType.POLYGON.value && configuration.fetchPerimeterInfoFromMessageMetadata === false"> <div layout=column flex=100> <md-input-container class=md-block style=margin-top:44px> <label translate>tb.rulenode.polygon-definition</label> <input ng-required=true name=polygonsDefinition ng-model=configuration.polygonsDefinition> <div ng-messages=geoActionConfigForm.polygonsDefinition.$error> <div ng-message=required translate>tb.rulenode.polygon-definition-required</div> </div> <div class=tb-hint style=margin-top:5px translate>tb.rulenode.polygon-definition-hint</div> </md-input-container> </div> </div> <div layout=column layout-gt-sm=row> <md-input-container flex class="md-block tb-time-value" flex> <label translate class="tb-title no-padding">tb.rulenode.min-inside-duration</label> <input required type=number step=1 min=1 max=2147483647 name=minInsideDuration ng-model=configuration.minInsideDuration> <div ng-messages=geoActionConfigForm.minInsideDuration.$error> <div translate ng-message=required>tb.rulenode.min-inside-duration-value-required</div> <div ng-message=min translate>tb.rulenode.time-value-range</div> <div ng-message=max translate>tb.rulenode.time-value-range</div> </div> </md-input-container> <md-input-container flex class="md-block tb-time-unit" flex> <label translate class="tb-title no-padding">tb.rulenode.min-inside-duration-time-unit</label> <md-select required name=minInsideDurationTimeUnit aria-label="{{ \'tb.rulenode.min-inside-duration-time-unit\' | translate }}" ng-model=configuration.minInsideDurationTimeUnit> <md-option ng-repeat="timeUnit in ruleNodeTypes.timeUnit" ng-value=timeUnit.value> {{timeUnit.name | translate}} </md-option> </md-select> </md-input-container> </div> <div layout=column layout-gt-sm=row> <md-input-container flex class="md-block tb-time-value" flex> <label translate class="tb-title no-padding">tb.rulenode.min-outside-duration</label> <input required type=number step=1 min=1 max=2147483647 name=minOutsideDuration ng-model=configuration.minOutsideDuration> <div ng-messages=geoActionConfigForm.minOutsideDuration.$error> <div translate ng-message=required>tb.rulenode.min-outside-duration-value-required</div> <div ng-message=min translate>tb.rulenode.time-value-range</div> <div ng-message=max translate>tb.rulenode.time-value-range</div> </div> </md-input-container> <md-input-container flex class="md-block tb-time-unit" flex> <label translate class="tb-title no-padding">tb.rulenode.min-outside-duration-time-unit</label> <md-select required name=minOutsideDurationTimeUnit aria-label="{{ \'tb.rulenode.min-outside-duration-time-unit\' | translate }}" ng-model=configuration.minOutsideDurationTimeUnit> <md-option ng-repeat="timeUnit in ruleNodeTypes.timeUnit" ng-value=timeUnit.value> {{timeUnit.name | translate}} </md-option> </md-select> </md-input-container> </div> </section> '
}, function (e, t) {
    e.exports = ' <section ng-form name=kafkaConfigForm layout=column> <md-input-container class=md-block> <label translate>tb.rulenode.topic-pattern</label> <input ng-required=true name=topicPattern ng-model=configuration.topicPattern> <div ng-messages=kafkaConfigForm.topicPattern.$error> <div ng-message=required translate>tb.rulenode.topic-pattern-required</div> </div> </md-input-container> <md-input-container class=md-block> <label translate>tb.rulenode.bootstrap-servers</label> <input ng-required=true name=bootstrapServers ng-model=configuration.bootstrapServers> <div ng-messages=kafkaConfigForm.bootstrapServers.$error> <div ng-message=required translate>tb.rulenode.bootstrap-servers-required</div> </div> </md-input-container> <md-input-container class=md-block> <label translate>tb.rulenode.retries</label> <input type=number step=1 name=retries ng-model=configuration.retries min=0> <div ng-messages=kafkaConfigForm.retries.$error> <div ng-message=min translate>tb.rulenode.min-retries-message</div> </div> </md-input-container> <md-input-container class=md-block> <label translate>tb.rulenode.batch-size-bytes</label> <input type=number step=1 name=batchSize ng-model=configuration.batchSize min=0> <div ng-messages=kafkaConfigForm.batchSize.$error> <div ng-message=min translate>tb.rulenode.min-batch-size-bytes-message</div> </div> </md-input-container> <md-input-container class=md-block> <label translate>tb.rulenode.linger-ms</label> <input type=number step=1 name=linger ng-model=configuration.linger min=0> <div ng-messages=kafkaConfigForm.linger.$error> <div ng-message=min translate>tb.rulenode.min-linger-ms-message</div> </div> </md-input-container> <md-input-container class=md-block> <label translate>tb.rulenode.buffer-memory-bytes</label> <input type=number step=1 name=bufferMemory ng-model=configuration.bufferMemory min=0> <div ng-messages=kafkaConfigForm.bufferMemory.$error> <div ng-message=min translate>tb.rulenode.min-buffer-memory-bytes-message</div> </div> </md-input-container> <md-input-container class=md-block> <label translate>tb.rulenode.acks</label> <md-select ng-model=configuration.acks ng-disabled=$root.loading> <md-option ng-repeat="ackValue in ackValues" ng-value=ackValue> {{ ackValue }} </md-option> </md-select> </md-input-container> <md-input-container class=md-block> <label translate>tb.rulenode.key-serializer</label> <input ng-required=true name=keySerializer ng-model=configuration.keySerializer> <div ng-messages=kafkaConfigForm.keySerializer.$error> <div ng-message=required translate>tb.rulenode.key-serializer-required</div> </div> </md-input-container> <md-input-container class=md-block> <label translate>tb.rulenode.value-serializer</label> <input ng-required=true name=valueSerializer ng-model=configuration.valueSerializer> <div ng-messages=kafkaConfigForm.valueSerializer.$error> <div ng-message=required translate>tb.rulenode.value-serializer-required</div> </div> </md-input-container> <label translate class=tb-title>tb.rulenode.other-properties</label> <tb-kv-map-config ng-model=configuration.otherProperties ng-required=false key-text="\'tb.rulenode.key\'" key-required-text="\'tb.rulenode.key-required\'" val-text="\'tb.rulenode.value\'" val-required-text="\'tb.rulenode.value-required\'"> </tb-kv-map-config> </section> '
}, function (e, t) {
    e.exports = " <section layout=column> <label translate class=\"tb-title no-padding\">tb.rulenode.to-string</label> <tb-js-func ng-model=configuration.jsScript function-name=ToString function-args=\"{{ ['msg', 'metadata', 'msgType'] }}\" no-validate=true> </tb-js-func> <div layout=row> <md-button ng-click=testScript($event) class=\"md-primary md-raised\"> {{ 'tb.rulenode.test-to-string-function' | translate }} </md-button> </div> </section> "
}, function (e, t) {
    e.exports = ' <section class=tb-mqtt-config ng-form name=mqttConfigForm layout=column> <md-input-container class=md-block> <label translate>tb.rulenode.topic-pattern</label> <input ng-required=true name=topicPattern ng-model=configuration.topicPattern> <div ng-messages=mqttConfigForm.topicPattern.$error> <div translate ng-message=required>tb.rulenode.topic-pattern-required</div> </div> <div class=tb-hint translate>tb.rulenode.mqtt-topic-pattern-hint</div> </md-input-container> <div flex layout=column layout-gt-sm=row> <md-input-container flex=60 class=md-block> <label translate>tb.rulenode.host</label> <input ng-required=true name=host ng-model=configuration.host> <div ng-messages=mqttConfigForm.host.$error> <div translate ng-message=required>tb.rulenode.host-required</div> </div> </md-input-container> <md-input-container flex=40 class=md-block> <label translate>tb.rulenode.port</label> <input type=number step=1 min=1 max=65535 ng-required=true name=port ng-model=configuration.port> <div ng-messages=mqttConfigForm.port.$error> <div translate ng-message=required>tb.rulenode.port-required</div> <div translate ng-message=min>tb.rulenode.port-range</div> <div translate ng-message=max>tb.rulenode.port-range</div> </div> </md-input-container> <md-input-container flex=40 class=md-block> <label translate>tb.rulenode.connect-timeout</label> <input type=number step=1 min=1 max=200 ng-required=true name=connectTimeoutSec ng-model=configuration.connectTimeoutSec> <div ng-messages=mqttConfigForm.connectTimeoutSec.$error> <div translate ng-message=required>tb.rulenode.connect-timeout-required</div> <div translate ng-message=min>tb.rulenode.connect-timeout-range</div> <div translate ng-message=max>tb.rulenode.connect-timeout-range</div> </div> </md-input-container> </div> <md-input-container class=md-block> <label translate>tb.rulenode.client-id</label> <input name=clientId ng-model=configuration.clientId> </md-input-container> <md-checkbox ng-disabled="$root.loading || readonly" aria-label="{{ \'tb.rulenode.clean-session\' | translate }}" ng-model=configuration.cleanSession> {{ \'tb.rulenode.clean-session\' | translate }} </md-checkbox> <md-checkbox ng-disabled="$root.loading || readonly" aria-label="{{ \'tb.rulenode.enable-ssl\' | translate }}" ng-model=configuration.ssl> {{ \'tb.rulenode.enable-ssl\' | translate }} </md-checkbox> <md-expansion-panel-group class=tb-credentials-panel-group ng-class="{\'disabled\': $root.loading || readonly}" md-component-id=credentialsPanelGroup> <md-expansion-panel md-component-id=credentialsPanel> <md-expansion-panel-collapsed> <div class=tb-panel-title>{{ \'tb.rulenode.credentials\' | translate }}</div> <div class=tb-panel-prompt>{{ ruleNodeTypes.mqttCredentialTypes[configuration.credentials.type].name | translate }}</div> <span flex></span> <md-expansion-panel-icon></md-expansion-panel-icon> </md-expansion-panel-collapsed> <md-expansion-panel-expanded> <md-expansion-panel-header ng-click="$mdExpansionPanel(\'credentialsPanel\').collapse()"> <div class=tb-panel-title>{{ \'tb.rulenode.credentials\' | translate }}</div> <div class=tb-panel-prompt>{{ ruleNodeTypes.mqttCredentialTypes[configuration.credentials.type].name | translate }}</div> <span flex></span> <md-expansion-panel-icon></md-expansion-panel-icon> </md-expansion-panel-header> <md-expansion-panel-content> <div layout=column> <md-input-container class=md-block> <label translate>tb.rulenode.credentials-type</label> <md-select ng-required=true name=credentialsType ng-model=configuration.credentials.type ng-disabled="$root.loading || readonly" ng-change=credentialsTypeChanged()> <md-option ng-repeat="(credentialsType, credentialsValue) in ruleNodeTypes.mqttCredentialTypes" ng-value=credentialsValue.value> {{credentialsValue.name | translate}} </md-option> </md-select> <div ng-messages=mqttConfigForm.credentialsType.$error> <div translate ng-message=required>tb.rulenode.credentials-type-required</div> </div> </md-input-container> <section flex layout=column ng-if="configuration.credentials.type == ruleNodeTypes.mqttCredentialTypes.basic.value"> <md-input-container class=md-block> <label translate>tb.rulenode.username</label> <input ng-required=true name=mqttUsername ng-model=configuration.credentials.username> <div ng-messages=mqttConfigForm.mqttUsername.$error> <div translate ng-message=required>tb.rulenode.username-required</div> </div> </md-input-container> <md-input-container class=md-block> <label translate>tb.rulenode.password</label> <input type=password ng-required=true name=mqttPassword ng-model=configuration.credentials.password> <div ng-messages=mqttConfigForm.mqttPassword.$error> <div translate ng-message=required>tb.rulenode.password-required</div> </div> </md-input-container> </section> <section flex layout=column ng-if="configuration.credentials.type == ruleNodeTypes.mqttCredentialTypes[\'cert.PEM\'].value" class=dropdown-section> <div class=tb-container ng-class="configuration.credentials.caCertFileName ? \'ng-valid\' : \'ng-invalid\'"> <label class=tb-label translate>tb.rulenode.ca-cert</label> <div flow-init={singleFile:true} flow-file-added="certFileAdded($file, \'caCert\')" class=tb-file-select-container> <div class=tb-file-clear-container> <md-button ng-click="clearCertFile(\'caCert\')" class="tb-file-clear-btn md-icon-button md-primary" aria-label="{{ \'action.remove\' | translate }}"> <md-tooltip md-direction=top> {{ \'action.remove\' | translate }} </md-tooltip> <md-icon aria-label="{{ \'action.remove\' | translate }}" class=material-icons>close</md-icon> </md-button> </div> <div class="alert tb-flow-drop" flow-drop> <label for=caCertSelect translate>tb.rulenode.drop-file</label> <input class=file-input flow-btn id=caCertSelect> </div> </div> </div> <div class=dropdown-messages> <div ng-if=!configuration.credentials.caCertFileName class=tb-error-message translate>tb.rulenode.no-file</div> <div ng-if=configuration.credentials.caCertFileName>{{configuration.credentials.caCertFileName}}</div> </div> <div class=tb-container ng-class="configuration.credentials.certFileName ? \'ng-valid\' : \'ng-invalid\'"> <label class=tb-label translate>tb.rulenode.cert</label> <div flow-init={singleFile:true} flow-file-added="certFileAdded($file, \'Cert\')" class=tb-file-select-container> <div class=tb-file-clear-container> <md-button ng-click="clearCertFile(\'Cert\')" class="tb-file-clear-btn md-icon-button md-primary" aria-label="{{ \'action.remove\' | translate }}"> <md-tooltip md-direction=top> {{ \'action.remove\' | translate }} </md-tooltip> <md-icon aria-label="{{ \'action.remove\' | translate }}" class=material-icons>close</md-icon> </md-button> </div> <div class="alert tb-flow-drop" flow-drop> <label for=CertSelect translate>tb.rulenode.drop-file</label> <input class=file-input flow-btn id=CertSelect> </div> </div> </div> <div class=dropdown-messages> <div ng-if=!configuration.credentials.certFileName class=tb-error-message translate>tb.rulenode.no-file</div> <div ng-if=configuration.credentials.certFileName>{{configuration.credentials.certFileName}}</div> </div> <div class=tb-container ng-class="configuration.credentials.privateKeyFileName ? \'ng-valid\' : \'ng-invalid\'"> <label class=tb-label translate>tb.rulenode.private-key</label> <div flow-init={singleFile:true} flow-file-added="certFileAdded($file, \'privateKey\')" class=tb-file-select-container> <div class=tb-file-clear-container> <md-button ng-click="clearCertFile(\'privateKey\')" class="tb-file-clear-btn md-icon-button md-primary" aria-label="{{ \'action.remove\' | translate }}"> <md-tooltip md-direction=top> {{ \'action.remove\' | translate }} </md-tooltip> <md-icon aria-label="{{ \'action.remove\' | translate }}" class=material-icons>close</md-icon> </md-button> </div> <div class="alert tb-flow-drop" flow-drop> <label for=privateKeySelect translate>tb.rulenode.drop-file</label> <input class=file-input flow-btn id=privateKeySelect> </div> </div> </div> <div class=dropdown-messages> <div ng-if=!configuration.credentials.privateKeyFileName class=tb-error-message translate>tb.rulenode.no-file</div> <div ng-if=configuration.credentials.privateKeyFileName>{{configuration.credentials.privateKeyFileName}}</div> </div> <md-input-container class=md-block> <label translate>tb.rulenode.private-key-password</label> <input type=password name=privateKeyPassword ng-model=configuration.credentials.password> </md-input-container> </section> </div> </md-expansion-panel-content> </md-expansion-panel-expanded> </md-expansion-panel> </md-expansion-panel-group> </section>'
}, function (e, t) {
    e.exports = " <section ng-form name=msgCountConfigForm layout=column> <md-input-container class=md-block> <label translate>tb.rulenode.interval-seconds</label> <input ng-required=true type=number step=1 name=interval ng-model=configuration.interval min=1> <div ng-messages=msgCountConfigForm.interval.$error multiple=multiple md-auto-hide=false> <div ng-message=required translate>tb.rulenode.interval-seconds-required</div> <div ng-message=min translate>tb.rulenode.min-interval-seconds-message</div> </div> </md-input-container> <md-input-container class=md-block> <label translate>tb.rulenode.output-timeseries-key-prefix</label> <input ng-required=true name=telemetryPrefix ng-model=configuration.telemetryPrefix> <div ng-messages=msgCountConfigForm.telemetryPrefix.$error> <div translate ng-message=required>tb.rulenode.output-timeseries-key-prefix-required</div> </div> </md-input-container> </section> ";
}, function (e, t) {
    e.exports = " <section ng-form name=msgDelayConfigForm layout=column> <md-input-container class=md-block> <label translate>tb.rulenode.period-seconds</label> <input ng-required=true type=number step=1 name=periodInSeconds ng-model=configuration.periodInSeconds min=0> <div ng-messages=msgDelayConfigForm.periodInSeconds.$error multiple=multiple md-auto-hide=false> <div ng-message=required translate>tb.rulenode.period-seconds-required</div> <div ng-message=min translate>tb.rulenode.min-period-0-seconds-message</div> </div> </md-input-container> <md-input-container class=md-block> <label translate>tb.rulenode.max-pending-messages</label> <input ng-required=true type=number step=1 name=maxPendingMsgs ng-model=configuration.maxPendingMsgs min=1 max=100000> <div ng-messages=msgDelayConfigForm.maxPendingMsgs.$error multiple=multiple md-auto-hide=false> <div ng-message=required translate>tb.rulenode.max-pending-messages-required</div> <div ng-message=min translate>tb.rulenode.max-pending-messages-range</div> <div ng-message=max translate>tb.rulenode.max-pending-messages-range</div> </div> </md-input-container> </section> "
}, function (e, t) {
    e.exports = ' <section ng-form name=rabbitMqConfigForm layout=column> <md-input-container class=md-block> <label translate>tb.rulenode.exchange-name-pattern</label> <input name=exchangeNamePattern ng-model=configuration.exchangeNamePattern> </md-input-container> <md-input-container class=md-block> <label translate>tb.rulenode.routing-key-pattern</label> <input name=routingKeyPattern ng-model=configuration.routingKeyPattern> </md-input-container> <md-input-container class=md-block> <label translate>tb.rulenode.message-properties</label> <md-select ng-model=configuration.messageProperties ng-disabled="$root.loading || readonly"> <md-option ng-repeat="property in messageProperties" ng-value=property> {{ property }} </md-option> </md-select> </md-input-container> <div layout-gt-sm=row> <md-input-container class=md-block flex=100 flex-gt-sm=60> <label translate>tb.rulenode.host</label> <input ng-required=true name=host ng-model=configuration.host> <div ng-messages=rabbitMqConfigForm.host.$error> <div ng-message=required translate>tb.rulenode.host-required</div> </div> </md-input-container> <md-input-container class=md-block flex=100 flex-gt-sm=40> <label translate>tb.rulenode.port</label> <input ng-required=true type=number step=1 name=port ng-model=configuration.port min=0 max=65535> <div ng-messages=rabbitMqConfigForm.port.$error> <div ng-message=required translate>tb.rulenode.port-required</div> <div ng-message=min translate>tb.rulenode.port-range</div> <div ng-message=max translate>tb.rulenode.port-range</div> </div> </md-input-container> </div> <md-input-container class=md-block> <label translate>tb.rulenode.virtual-host</label> <input name=virtualHost ng-model=configuration.virtualHost> </md-input-container> <md-input-container class=md-block> <label translate>tb.rulenode.username</label> <input name=virtualHost ng-model=configuration.username> </md-input-container> <md-input-container class=md-block> <label translate>tb.rulenode.password</label> <input name=virtualHost type=password ng-model=configuration.password> </md-input-container> <md-input-container class=md-block> <md-checkbox ng-disabled="$root.loading || readonly" aria-label="{{ \'tb.rulenode.automatic-recovery\' | translate }}" ng-model=ruleNode.automaticRecoveryEnabled>{{ \'tb.rulenode.automatic-recovery\' | translate }} </md-checkbox> </md-input-container> <md-input-container class=md-block> <label translate>tb.rulenode.connection-timeout-ms</label> <input type=number step=1 name=connectionTimeout ng-model=configuration.connectionTimeout min=0> <div ng-messages=rabbitMqConfigForm.connectionTimeout.$error> <div ng-message=min translate>tb.rulenode.min-connection-timeout-ms-message</div> </div> </md-input-container> <md-input-container class=md-block> <label translate>tb.rulenode.handshake-timeout-ms</label> <input type=number step=1 name=handshakeTimeout ng-model=configuration.handshakeTimeout min=0> <div ng-messages=rabbitMqConfigForm.handshakeTimeout.$error> <div ng-message=min translate>tb.rulenode.min-handshake-timeout-ms-message</div> </div> </md-input-container> <label translate class=tb-title>tb.rulenode.client-properties</label> <tb-kv-map-config ng-model=configuration.clientProperties ng-required=false key-text="\'tb.rulenode.key\'" key-required-text="\'tb.rulenode.key-required\'" val-text="\'tb.rulenode.value\'" val-required-text="\'tb.rulenode.value-required\'"> </tb-kv-map-config> </section> '
}, function (e, t) {
    e.exports = ' <section ng-form name=restApiCallConfigForm layout=column> <md-input-container class=md-block> <label translate>tb.rulenode.endpoint-url-pattern</label> <input ng-required=true name=endpointUrlPattern ng-model=configuration.restEndpointUrlPattern> <div ng-messages=restApiCallConfigForm.endpointUrlPattern.$error> <div ng-message=required translate>tb.rulenode.endpoint-url-pattern-required</div> </div> <div class=tb-hint translate>tb.rulenode.endpoint-url-pattern-hint</div> </md-input-container> <md-input-container class=md-block> <label translate>tb.rulenode.request-method</label> <md-select ng-model=configuration.requestMethod ng-disabled=$root.loading> <md-option ng-repeat="type in ruleNodeTypes.httpRequestType" ng-value=type> {{ type }} </md-option> </md-select> </md-input-container> <md-checkbox ng-disabled="$root.loading || readonly" aria-label="{{ \'tb.rulenode.use-simple-client-http-factory\' | translate }}" ng-model=configuration.useSimpleClientHttpFactory> {{ \'tb.rulenode.use-simple-client-http-factory\' | translate }} </md-checkbox> <label translate class=tb-title>tb.rulenode.headers</label> <div class=tb-hint translate>tb.rulenode.headers-hint</div> <tb-kv-map-config ng-model=configuration.headers ng-required=false key-text="\'tb.rulenode.header\'" key-required-text="\'tb.rulenode.header-required\'" val-text="\'tb.rulenode.value\'" val-required-text="\'tb.rulenode.value-required\'"> </tb-kv-map-config> </section> '
}, function (e, t) {
    e.exports = " <section ng-form name=rpcReplyConfigForm layout=column> <md-input-container class=md-block> <label translate>tb.rulenode.request-id-metadata-attribute</label> <input name=requestIdMetaDataAttribute ng-model=configuration.requestIdMetaDataAttribute> </md-input-container> </section> "
}, function (e, t) {
    e.exports = " <section ng-form name=rpcRequestConfigForm layout=column> <md-input-container class=md-block> <label translate>tb.rulenode.timeout-sec</label> <input ng-required=true type=number step=1 name=timeoutInSeconds ng-model=configuration.timeoutInSeconds min=0> <div ng-messages=rpcRequestConfigForm.timeoutInSeconds.$error multiple=multiple md-auto-hide=false> <div ng-message=required translate>tb.rulenode.timeout-required</div> <div ng-message=min translate>tb.rulenode.min-timeout-message</div> </div> </md-input-container> </section> "
}, function (e, t) {
    e.exports = ' <section layout=column> <md-input-container class=md-block> <label translate>tb.rulenode.custom-table-name</label> <input ng-required=true name=tableName ng-model=configuration.tableName> <div ng-messages=saveToCustomTableConfigForm.tableName.$error> <div ng-message=required translate>tb.rulenode.custom-table-name-required</div> </div> <div class=tb-hint style=margin-top:5px translate>tb.rulenode.custom-table-hint</div> </md-input-container> <label translate class="tb-title tb-required">tb.rulenode.fields-mapping</label> <tb-kv-map-config ng-model=configuration.fieldsMapping ng-required=true required-text="\'tb.rulenode.fields-mapping-required\'" key-text="\'tb.rulenode.message-field\'" key-required-text="\'tb.rulenode.message-field-required\'" val-text="\'tb.rulenode.table-col\'" val-required-text="\'tb.rulenode.table-col-required\'"> </tb-kv-map-config> </section> '
}, function (e, t) {
    e.exports = ' <section ng-form name=sendEmailConfigForm layout=column> <md-checkbox ng-disabled="$root.loading || readonly" aria-label="{{ \'tb.rulenode.use-system-smtp-settings\' | translate }}" ng-model=configuration.useSystemSmtpSettings> {{ \'tb.rulenode.use-system-smtp-settings\' | translate }} </md-checkbox> <section layout=column ng-if=!configuration.useSystemSmtpSettings> <md-input-container class=md-block> <label translate>tb.rulenode.smtp-protocol</label> <md-select ng-disabled="$root.loading || readonly" ng-model=configuration.smtpProtocol> <md-option ng-repeat="smtpProtocol in smtpProtocols" value={{smtpProtocol}}> {{smtpProtocol.toUpperCase()}} </md-option> </md-select> </md-input-container> <div layout-gt-sm=row> <md-input-container class=md-block flex=100 flex-gt-sm=60> <label translate>tb.rulenode.smtp-host</label> <input ng-required=true name=smtpHost ng-model=configuration.smtpHost> <div ng-messages=sendEmailConfigForm.smtpHost.$error> <div translate ng-message=required>tb.rulenode.smtp-host-required</div> </div> </md-input-container> <md-input-container class=md-block flex=100 flex-gt-sm=40> <label translate>tb.rulenode.smtp-port</label> <input type=number step=1 min=1 max=65535 ng-required=true name=port ng-model=configuration.smtpPort> <div ng-messages=sendEmailConfigForm.port.$error> <div translate ng-message=required>tb.rulenode.smtp-port-required</div> <div translate ng-message=min>tb.rulenode.smtp-port-range</div> <div translate ng-message=max>tb.rulenode.smtp-port-range</div> </div> </md-input-container> </div> <md-input-container class=md-block> <label translate>tb.rulenode.timeout-msec</label> <input type=number step=1 min=0 ng-required=true name=timeout ng-model=configuration.timeout> <div ng-messages=sendEmailConfigForm.timeout.$error> <div translate ng-message=required>tb.rulenode.timeout-required</div> <div translate ng-message=min>tb.rulenode.min-timeout-msec-message</div> </div> </md-input-container> <md-checkbox ng-disabled="$root.loading || readonly" aria-label="{{ \'tb.rulenode.enable-tls\' | translate }}" ng-model=configuration.enableTls>{{ \'tb.rulenode.enable-tls\' | translate }}</md-checkbox> <md-input-container class=md-block> <label translate>tb.rulenode.username</label> <input name=username placeholder="{{ \'tb.rulenode.enter-username\' | translate }}" ng-model=configuration.username> </md-input-container> <md-input-container class=md-block> <label translate>tb.rulenode.password</label> <input name=password placeholder="{{ \'tb.rulenode.enter-password\' | translate }}" type=password ng-model=configuration.password> </md-input-container> </section> </section> '
}, function (e, t) {
    e.exports = " <section ng-form name=snsConfigForm layout=column> <md-input-container class=md-block> <label translate>tb.rulenode.topic-arn-pattern</label> <input ng-required=true name=topicArnPattern ng-model=configuration.topicArnPattern> <div ng-messages=snsConfigForm.topicArnPattern.$error> <div ng-message=required translate>tb.rulenode.topic-arn-pattern-required</div> </div> <div class=tb-hint translate>tb.rulenode.topic-arn-pattern-hint</div> </md-input-container> <md-input-container class=md-block> <label translate>tb.rulenode.aws-access-key-id</label> <input ng-required=true name=accessKeyId ng-model=configuration.accessKeyId> <div ng-messages=snsConfigForm.accessKeyId.$error> <div ng-message=required translate>tb.rulenode.aws-access-key-id-required</div> </div> </md-input-container> <md-input-container class=md-block> <label translate>tb.rulenode.aws-secret-access-key</label> <input ng-required=true name=secretAccessKey ng-model=configuration.secretAccessKey> <div ng-messages=snsConfigForm.secretAccessKey.$error> <div ng-message=required translate>tb.rulenode.aws-secret-access-key-required</div> </div> </md-input-container> <md-input-container class=md-block> <label translate>tb.rulenode.aws-region</label> <input ng-required=true name=region ng-model=configuration.region> <div ng-messages=snsConfigForm.region.$error> <div ng-message=required translate>tb.rulenode.aws-region-required</div> </div> </md-input-container> </section> "
}, function (e, t) {
    e.exports = ' <section ng-form name=sqsConfigForm layout=column> <md-input-container class=md-block> <label translate>tb.rulenode.queue-type</label> <md-select ng-model=configuration.queueType ng-disabled="$root.loading || readonly"> <md-option ng-repeat="type in ruleNodeTypes.sqsQueueType" ng-value=type.value> {{ type.name | translate }} </md-option> </md-select> </md-input-container> <md-input-container class=md-block> <label translate>tb.rulenode.queue-url-pattern</label> <input ng-required=true name=queueUrlPattern ng-model=configuration.queueUrlPattern> <div ng-messages=sqsConfigForm.queueUrlPattern.$error> <div ng-message=required translate>tb.rulenode.queue-url-pattern-required</div> </div> <div class=tb-hint translate>tb.rulenode.queue-url-pattern-hint</div> </md-input-container> <md-input-container class=md-block ng-if="configuration.queueType == ruleNodeTypes.sqsQueueType.STANDARD.value"> <label translate>tb.rulenode.delay-seconds</label> <input type=number step=1 name=delaySeconds ng-model=configuration.delaySeconds min=0 max=900> <div ng-messages=sqsConfigForm.delaySeconds.$error> <div ng-message=min translate>tb.rulenode.min-delay-seconds-message</div> <div ng-message=max translate>tb.rulenode.max-delay-seconds-message</div> </div> </md-input-container> <label translate class=tb-title>tb.rulenode.message-attributes</label> <div class=tb-hint translate>tb.rulenode.message-attributes-hint</div> <tb-kv-map-config ng-model=configuration.messageAttributes ng-required=false key-text="\'tb.rulenode.name\'" key-required-text="\'tb.rulenode.name-required\'" val-text="\'tb.rulenode.value\'" val-required-text="\'tb.rulenode.value-required\'"> </tb-kv-map-config> <md-input-container class=md-block> <label translate>tb.rulenode.aws-access-key-id</label> <input ng-required=true name=accessKeyId ng-model=configuration.accessKeyId> <div ng-messages=snsConfigForm.accessKeyId.$error> <div ng-message=required translate>tb.rulenode.aws-access-key-id-required</div> </div> </md-input-container> <md-input-container class=md-block> <label translate>tb.rulenode.aws-secret-access-key</label> <input ng-required=true name=secretAccessKey ng-model=configuration.secretAccessKey> <div ng-messages=snsConfigForm.secretAccessKey.$error> <div ng-message=required translate>tb.rulenode.aws-secret-access-key-required</div> </div> </md-input-container> <md-input-container class=md-block> <label translate>tb.rulenode.aws-region</label> <input ng-required=true name=region ng-model=configuration.region> <div ng-messages=snsConfigForm.region.$error> <div ng-message=required translate>tb.rulenode.aws-region-required</div> </div> </md-input-container> </section> '
}, function (e, t) {
    e.exports = " <section ng-form name=timeseriesConfigForm layout=column> <md-input-container class=md-block> <label translate>tb.rulenode.default-ttl</label> <input ng-required=true type=number step=1 name=defaultTTL ng-model=configuration.defaultTTL min=0> <div ng-messages=timeseriesConfigForm.defaultTTL.$error multiple=multiple md-auto-hide=false> <div ng-message=required translate>tb.rulenode.default-ttl-required</div> <div ng-message=min translate>tb.rulenode.min-default-ttl-message</div> </div> </md-input-container> </section> "
}, function (e, t) {
    e.exports = " <section ng-form name=unAssignCustomerConfigForm layout=column> <md-input-container class=md-block> <label translate>tb.rulenode.customer-name-pattern</label> <input ng-required=true name=customerNamePattern ng-model=configuration.customerNamePattern> <div ng-messages=unAssignCustomerConfigForm.customerNamePattern.$error> <div ng-message=required translate>tb.rulenode.customer-name-pattern-required</div> </div> <div class=tb-hint translate>tb.rulenode.customer-name-pattern-hint</div> </md-input-container> <md-input-container class=md-block> <label translate>tb.rulenode.customer-cache-expiration</label> <input type=number step=1 min=0 ng-required=true name=customerCacheExpiration ng-model=configuration.customerCacheExpiration> <div ng-messages=unAssignCustomerConfigForm.customerCacheExpiration.$error> <div translate ng-message=required>tb.rulenode.customer-cache-expiration-required</div> <div translate ng-message=min>tb.rulenode.customer-cache-expiration-range</div> </div> <div class=tb-hint translate>tb.rulenode.customer-cache-expiration-hint</div> </md-input-container> </section> "
}, function (e, t) {
    e.exports = ' <section layout=column> <div layout=row> <md-input-container class=md-block style=min-width:100px> <label translate>relation.direction</label> <md-select required ng-model=query.direction> <md-option ng-repeat="direction in types.entitySearchDirection" ng-value=direction> {{ (\'relation.search-direction.\' + direction) | translate}} </md-option> </md-select> </md-input-container> <md-input-container class=md-block> <label translate>tb.rulenode.max-relation-level</label> <input name=maxRelationLevel type=number min=1 step=1 placeholder="{{ \'tb.rulenode.unlimited-level\' | translate }}" ng-model=query.maxLevel aria-label="{{ \'tb.rulenode.max-relation-level\' | translate }}"> </md-input-container> </div> <div class=md-caption style=color:rgba(0,0,0,.57) translate>relation.relation-type</div> <tb-relation-type-autocomplete flex hide-label ng-model=query.relationType tb-required=false> </tb-relation-type-autocomplete> <div class="md-caption tb-required" style=color:rgba(0,0,0,.57) translate>device.device-types</div> <tb-entity-subtype-list tb-required=true entity-type=types.entityType.device ng-model=query.deviceTypes> </tb-entity-subtype-list> </section> '
}, function (e, t) {
    e.exports = " <section layout=column> <label translate class=\"tb-title tb-required\">tb.rulenode.attr-mapping</label> <md-checkbox aria-label=\"{{ 'tb.rulenode.latest-telemetry' | translate }}\" ng-model=configuration.telemetry>{{ 'tb.rulenode.latest-telemetry' | translate }} </md-checkbox> <tb-kv-map-config ng-model=configuration.attrMapping ng-required=true required-text=\"'tb.rulenode.attr-mapping-required'\" key-text=\"configuration.telemetry ? 'tb.rulenode.source-telemetry' : 'tb.rulenode.source-attribute'\" key-required-text=\"configuration.telemetry ? 'tb.rulenode.source-telemetry-required' : 'tb.rulenode.source-attribute-required'\" val-text=\"'tb.rulenode.target-attribute'\" val-required-text=\"'tb.rulenode.target-attribute-required'\"> </tb-kv-map-config> </section> "
}, function (e, t) {
    e.exports = ' <section layout=column> <label translate class="tb-title tb-required">tb.rulenode.device-relations-query</label> <tb-device-relations-query-config style=padding-bottom:15px ng-model=configuration.deviceRelationsQuery> </tb-device-relations-query-config> <label translate class="tb-title no-padding">tb.rulenode.client-attributes</label> <md-chips style=padding-bottom:15px ng-required=false readonly=readonly ng-model=configuration.clientAttributeNames placeholder="{{\'tb.rulenode.client-attributes\' | translate}}" md-separator-keys=separatorKeys md-add-on-blur=true> </md-chips> <label translate class="tb-title no-padding">tb.rulenode.shared-attributes</label> <md-chips style=padding-bottom:15px ng-required=false readonly=readonly ng-model=configuration.sharedAttributeNames placeholder="{{\'tb.rulenode.shared-attributes\' | translate}}" md-separator-keys=separatorKeys md-add-on-blur=true> </md-chips> <label translate class="tb-title no-padding">tb.rulenode.server-attributes</label> <md-chips style=padding-bottom:15px ng-required=false readonly=readonly ng-model=configuration.serverAttributeNames placeholder="{{\'tb.rulenode.server-attributes\' | translate}}" md-separator-keys=separatorKeys md-add-on-blur=true> </md-chips> <label translate class="tb-title no-padding">tb.rulenode.latest-timeseries</label> <md-chips ng-required=false readonly=readonly ng-model=configuration.latestTsKeyNames placeholder="{{\'tb.rulenode.latest-timeseries\' | translate}}" md-separator-keys=separatorKeys md-add-on-blur=true> </md-chips> </section> '
}, function (e, t) {
    e.exports = ' <section layout=column> <label translate class="tb-title no-padding" class=required>tb.rulenode.entity-details</label> <md-chips readonly=disabled style=margin-bottom:28px id=entityDetailsListChips ng-required=tbRequired ng-model=configuration.detailsList placeholder={{placeholder}} secondary-placeholder={{secondaryPlaceholder}} md-autocomplete-snap md-require-match=true> <md-autocomplete md-no-cache=true id=entityDetails md-selected-item=selectedEntityDetail md-selected-item-change=selectedItemChange(item) md-search-text=entityDetailsSearchText md-items="item in entityDetailsList" md-item-text=item md-min-length=0 placeholder="{{ (!ruleNodeTypes.entityDetails || !ruleNodeTypes.entityDetails.length) ? placeholder : secondaryPlaceholder }}"> <md-item-template> <span md-highlight-text=entityDetailsSearchText md-highlight-flags=^i> {{\'tb.rulenode.entity-details-\'+item.toLowerCase() | translate}} </span> </md-item-template> <md-not-found> <span translate translate-values="{ entityDetails: entityDetailsSearchText }">tb.rulenode.no-entity-details-matching</span> </md-not-found> </md-autocomplete> <md-chip-template> <span> <strong>{{\'tb.rulenode.entity-details-\'+$chip.toLowerCase() | translate}}</strong> </span> </md-chip-template> </md-chips> <div class=tb-error-messages ng-messages=ngModelCtrl.$error ng-if="inputTouched && tbRequired" role=alert> <div translate ng-message=configuration.detailsList class=tb-error-message>tb.rulenode.entity-details-list-empty</div> </div> <md-checkbox aria-label="{{ \'tb.rulenode.add-to-metadata\' | translate }}" ng-model=configuration.addToMetadata> {{ \'tb.rulenode.add-to-metadata\' | translate }} </md-checkbox> <div class=tb-hint translate>tb.rulenode.add-to-metadata-hint</div> </section> '
}, function (e, t) {
    e.exports = ' <section class=tb-telemetry-from-database-config ng-form name=getTelemetryConfigForm layout=column> <label translate class="tb-title no-padding">tb.rulenode.latest-timeseries</label> <md-chips ng-required=false readonly=readonly ng-model=configuration.latestTsKeyNames placeholder="{{\'tb.rulenode.latest-timeseries\' | translate}}" md-separator-keys=separatorKeys> </md-chips> <md-input-container style=margin-bottom:18px;margin-top:58px> <label translate class="tb-title no-padding">tb.rulenode.fetch-mode</label> <md-select required ng-model=configuration.fetchMode> <md-option ng-repeat="type in ruleNodeTypes.fetchModeType" ng-value=type> {{ type }} </md-option> </md-select> </md-input-container> <div class=tb-hint translate>tb.rulenode.fetch-mode-hint</div> <md-input-container flex ng-if="configuration.fetchMode === \'ALL\' "> <label translate class="tb-title no-padding">tb.rulenode.order-by</label> <md-select required ng-model=configuration.orderBy> <md-option ng-repeat="type in ruleNodeTypes.samplingOrder" ng-value=type> {{ type }} </md-option> </md-select> </md-input-container> <div class=tb-hint translate flex ng-if="configuration.fetchMode === \'ALL\' ">tb.rulenode.order-by-hint</div> <md-checkbox aria-label="{{ \'tb.rulenode.use-metadata-interval-patterns\' | translate }}" ng-model=configuration.useMetadataIntervalPatterns>{{ \'tb.rulenode.use-metadata-interval-patterns\' | translate }} </md-checkbox> <div class=tb-hint translate>tb.rulenode.use-metadata-interval-patterns-hint</div> <div layout=column layout-gt-sm=row> <md-input-container flex class="md-block tb-time-value" flex ng-if="configuration.useMetadataIntervalPatterns == false"> <label translate class="tb-title no-padding">tb.rulenode.start-interval</label> <input required type=number step=1 min=1 max=2147483647 name=startInterval ng-model=configuration.startInterval> <div ng-messages=getTelemetryConfigForm.startInterval.$error> <div translate ng-message=required>tb.rulenode.start-interval-value-required</div> <div ng-message=min translate>tb.rulenode.time-value-range</div> <div ng-message=max translate>tb.rulenode.time-value-range</div> </div> </md-input-container> <md-input-container flex class="md-block tb-time-unit" flex ng-if="configuration.useMetadataIntervalPatterns == false "> <label translate class="tb-title no-padding">tb.rulenode.start-interval-time-unit</label> <md-select required name=startIntervalTimeUnit aria-label="{{ \'tb.rulenode.start-interval-time-unit\' | translate }}" ng-model=configuration.startIntervalTimeUnit> <md-option ng-repeat="timeUnit in ruleNodeTypes.timeUnit" ng-value=timeUnit.value> {{timeUnit.name | translate}} </md-option> </md-select> </md-input-container> </div> <div layout=column layout-gt-sm=row> <md-input-container flex class="md-block tb-time-value" flex ng-if="configuration.useMetadataIntervalPatterns == false"> <label translate class="tb-title no-padding">tb.rulenode.end-interval</label> <input required type=number step=1 min=1 max=2147483647 name=endInterval ng-model=configuration.endInterval> <div ng-messages=getTelemetryConfigForm.endInterval.$error> <div translate ng-message=required>tb.rulenode.end-interval-value-required</div> <div ng-message=min translate>tb.rulenode.time-value-range</div> <div ng-message=max translate>tb.rulenode.time-value-range</div> </div> </md-input-container> <md-input-container flex class="md-block tb-time-unit" flex ng-if="configuration.useMetadataIntervalPatterns === false"> <label translate class="tb-title no-padding">tb.rulenode.end-interval-time-unit</label> <md-select required name=endIntervalTimeUnit aria-label="{{ \'tb.rulenode.end-interval-time-unit\' | translate }}" ng-model=configuration.endIntervalTimeUnit> <md-option ng-repeat="timeUnit in ruleNodeTypes.timeUnit" ng-value=timeUnit.value> {{timeUnit.name | translate}} </md-option> </md-select> </md-input-container> </div> <md-input-container class=md-block flex ng-if="configuration.useMetadataIntervalPatterns === true" style=margin-top:38px> <label translate>tb.rulenode.start-interval-pattern</label> <input ng-required=true name=startIntervalPattern ng-model=configuration.startIntervalPattern> <div ng-messages=getTelemetryConfigForm.startIntervalPattern.$error> <div ng-message=required translate>tb.rulenode.start-interval-pattern-required</div> </div> <div class=tb-hint translate>tb.rulenode.start-interval-pattern-hint</div> </md-input-container> <md-input-container class=md-block flex ng-if="configuration.useMetadataIntervalPatterns === true"> <label translate>tb.rulenode.end-interval-pattern</label> <input ng-required=true name=endIntervalPattern ng-model=configuration.endIntervalPattern> <div ng-messages=getTelemetryConfigForm.endIntervalPattern.$error> <div ng-message=required translate>tb.rulenode.end-interval-pattern-required</div> </div> <div class=tb-hint translate>tb.rulenode.end-interval-pattern-hint</div> </md-input-container> </section>'
}, function (e, t) {
    e.exports = ' <section layout=column> <label translate class="tb-title no-padding">tb.rulenode.client-attributes</label> <md-chips style=padding-bottom:15px ng-required=false readonly=readonly ng-model=configuration.clientAttributeNames placeholder="{{\'tb.rulenode.client-attributes\' | translate}}" md-separator-keys=separatorKeys md-add-on-blur=true> </md-chips> <label translate class="tb-title no-padding">tb.rulenode.shared-attributes</label> <md-chips style=padding-bottom:15px ng-required=false readonly=readonly ng-model=configuration.sharedAttributeNames placeholder="{{\'tb.rulenode.shared-attributes\' | translate}}" md-separator-keys=separatorKeys md-add-on-blur=true> </md-chips> <label translate class="tb-title no-padding">tb.rulenode.server-attributes</label> <md-chips style=padding-bottom:15px ng-required=false readonly=readonly ng-model=configuration.serverAttributeNames placeholder="{{\'tb.rulenode.server-attributes\' | translate}}" md-separator-keys=separatorKeys md-add-on-blur=true> </md-chips> <label translate class="tb-title no-padding">tb.rulenode.latest-timeseries</label> <md-chips ng-required=false readonly=readonly ng-model=configuration.latestTsKeyNames placeholder="{{\'tb.rulenode.latest-timeseries\' | translate}}" md-separator-keys=separatorKeys md-add-on-blur=true> </md-chips> </section> '
}, function (e, t) {
    e.exports = ' <section layout=column> <label translate class="tb-title tb-required">tb.rulenode.fields-mapping</label> <tb-kv-map-config ng-model=configuration.fieldsMapping ng-required=true required-text="\'tb.rulenode.fields-mapping-required\'" key-text="\'tb.rulenode.source-field\'" key-required-text="\'tb.rulenode.source-field-required\'" val-text="\'tb.rulenode.target-attribute\'" val-required-text="\'tb.rulenode.target-attribute-required\'"> </tb-kv-map-config> </section> '
}, function (e, t) {
    e.exports = " <section layout=column> <label translate class=\"tb-title tb-required\">tb.rulenode.relations-query</label> <tb-relations-query-config style=padding-bottom:15px ng-model=configuration.relationsQuery> </tb-relations-query-config> <label translate class=\"tb-title tb-required\">tb.rulenode.attr-mapping</label> <md-checkbox aria-label=\"{{ 'tb.rulenode.latest-telemetry' | translate }}\" ng-model=configuration.telemetry>{{ 'tb.rulenode.latest-telemetry' | translate }} </md-checkbox> <tb-kv-map-config ng-model=configuration.attrMapping ng-required=true required-text=\"'tb.rulenode.attr-mapping-required'\" key-text=\"configuration.telemetry ? 'tb.rulenode.source-telemetry' : 'tb.rulenode.source-attribute'\" key-required-text=\"configuration.telemetry ? 'tb.rulenode.source-telemetry-required' : 'tb.rulenode.source-attribute-required'\" val-text=\"'tb.rulenode.target-attribute'\" val-required-text=\"'tb.rulenode.target-attribute-required'\"> </tb-kv-map-config> </section> "
}, 30, function (e, t) {
    e.exports = ' <section layout=column> <label translate class="tb-title no-padding tb-required">tb.rulenode.data-keys</label> <md-chips style=padding-bottom:15px ng-required=!(configuration.metadataNames).length readonly=readonly ng-model=configuration.messageNames placeholder="{{\'tb.rulenode.data-keys\' | translate}}" md-separator-keys=separatorKeys md-add-on-blur=true> </md-chips> <div class=tb-hint translate>tb.rulenode.separator-hint</div> <label translate class="tb-title no-padding tb-required">tb.rulenode.metadata-keys</label> <md-chips style=padding-bottom:15px ng-required=!(configuration.messageNames).length readonly=readonly ng-model=configuration.metadataNames placeholder="{{\'tb.rulenode.metadata-keys\' | translate}}" md-separator-keys=separatorKeys md-add-on-blur=true> </md-chips> <div class=tb-hint translate>tb.rulenode.separator-hint</div> <md-checkbox aria-label="{{ \'tb.rulenode.check-all-keys\' | translate }}" ng-model=configuration.checkAllKeys>{{ \'tb.rulenode.check-all-keys\' | translate }} </md-checkbox> <div class=tb-hint translate>tb.rulenode.check-all-keys-hint</div> </section> '
}, function (e, t) {
    e.exports = " <section ng-form name=checkRelationConfigForm> <md-checkbox aria-label=\"{{ 'tb.rulenode.check-relation-to-specific-entity' | translate }}\" ng-model=configuration.checkForSingleEntity> {{ 'tb.rulenode.check-relation-to-specific-entity' | translate }} </md-checkbox> <div class=tb-hint translate>tb.rulenode.check-relation-hint</div> <md-input-container class=md-block style=min-width:100px> <label translate>relation.direction</label> <md-select required ng-model=configuration.direction> <md-option ng-repeat=\"direction in types.entitySearchDirection\" ng-value=direction> {{ ('relation.search-direction.' + direction) | translate}} </md-option> </md-select> </md-input-container> <div layout=row class=tb-entity-select ng-if=configuration.checkForSingleEntity style=padding-top:20px> <tb-entity-type-select style=min-width:100px;padding-bottom:20px the-form=checkRelationConfigForm tb-required=true ng-model=configuration.entityType> </tb-entity-type-select> <tb-entity-autocomplete flex ng-if=configuration.entityType the-form=checkRelationConfigForm tb-required=true entity-type=configuration.entityType ng-model=configuration.entityId> </tb-entity-autocomplete> </div> <tb-relation-type-autocomplete hide-label ng-model=configuration.relationType tb-required=true> </tb-relation-type-autocomplete> </section> ";
}, function (e, t) {
    e.exports = ' <section ng-form name=geoFilterConfigForm layout=column> <md-input-container class=md-block> <label translate>tb.rulenode.latitude-key-name</label> <input ng-required=true name=latitudeKeyName ng-model=configuration.latitudeKeyName> <div ng-messages=geoFilterConfigForm.latitudeKeyName.$error> <div ng-message=required translate>tb.rulenode.latitude-key-name-required</div> </div> </md-input-container> <md-input-container class=md-block> <label translate>tb.rulenode.longitude-key-name</label> <input ng-required=true name=longitudeKeyName ng-model=configuration.longitudeKeyName> <div ng-messages=geoFilterConfigForm.longitudeKeyName.$error> <div ng-message=required translate>tb.rulenode.longitude-key-name-required</div> </div> </md-input-container> <md-checkbox flex aria-label="{{ \'tb.rulenode.fetch-perimeter-info-from-message-metadata\' | translate }}" ng-model=configuration.fetchPerimeterInfoFromMessageMetadata>{{ \'tb.rulenode.fetch-perimeter-info-from-message-metadata\' | translate }} </md-checkbox> <div layout=row class=tb-entity-select ng-if="configuration.fetchPerimeterInfoFromMessageMetadata === false"> <md-input-container class=md-block flex=100> <label translate>tb.rulenode.perimeter-type</label> <md-select required ng-model=configuration.perimeterType flex> <md-option ng-repeat="type in ruleNodeTypes.perimeterType" ng-value=type.value> {{ type.name | translate}} </md-option> </md-select> </md-input-container> </div> <div layout=row layout-wrap ng-if="configuration.perimeterType === ruleNodeTypes.perimeterType.CIRCLE.value && configuration.fetchPerimeterInfoFromMessageMetadata === false"> <div layout=column flex=50> <md-input-container class=md-block flex layout=column style=margin-top:44px> <label translate>tb.rulenode.circle-center-latitude</label> <input type=number min=0 step=0.1 ng-required=true name=centerLatitude ng-model=configuration.centerLatitude> <div ng-messages=geoFilterConfigForm.centerLatitude.$error> <div ng-message=required translate>tb.rulenode.circle-center-latitude-required</div> </div> </md-input-container> </div> <div layout=column flex=50> <md-input-container class=md-block flex style=margin-top:44px> <label translate>tb.rulenode.circle-center-longitude</label> <input type=number min=0 step=0.1 ng-required=true name=centerLongitude ng-model=configuration.centerLongitude> <div ng-messages=geoFilterConfigForm.centerLongitude.$error> <div ng-message=required translate>tb.rulenode.circle-center-longitude-required</div> </div> </md-input-container> </div> <div layout=column flex=50> <md-input-container class=md-block style=margin-top:28px> <label translate>tb.rulenode.range</label> <input type=number min=0 step=0.1 ng-required=true name=range ng-model=configuration.range> <div ng-messages=geoFilterConfigForm.range.$error> <div ng-message=required translate>tb.rulenode.range-required</div> </div> </md-input-container> </div> <div layout=column flex=50> <md-input-container class=md-block style=margin-top:28px> <label translate>tb.rulenode.range-units</label> <md-select required ng-model=configuration.rangeUnit> <md-option ng-repeat="type in ruleNodeTypes.rangeUnit" ng-value=type.value> {{ type.name | translate}} </md-option> </md-select> </md-input-container> </div> </div> <div layout=row layout-wrap ng-if="configuration.perimeterType === ruleNodeTypes.perimeterType.POLYGON.value && configuration.fetchPerimeterInfoFromMessageMetadata === false"> <div layout=column flex=100> <md-input-container class=md-block style=margin-top:44px> <label translate>tb.rulenode.polygon-definition</label> <input ng-required=true name=polygonsDefinition ng-model=configuration.polygonsDefinition> <div ng-messages=geoFilterConfigForm.polygonsDefinition.$error> <div ng-message=required translate>tb.rulenode.polygon-definition-required</div> </div> <div class=tb-hint style=margin-top:5px translate>tb.rulenode.polygon-definition-hint</div> </md-input-container> </div> </div> </section> '
}, function (e, t) {
    e.exports = ' <section layout=column> <label translate class="tb-title no-padding" ng-class="{\'tb-required\': required}">tb.rulenode.message-types-filter</label> <md-chips id=message_type_chips ng-required=required readonly=readonly ng-model=messageTypes md-autocomplete-snap md-transform-chip=transformMessageTypeChip($chip) md-require-match=false> <md-autocomplete id=message_type md-no-cache=true md-selected-item=selectedMessageType md-search-text=messageTypeSearchText md-items="item in messageTypesSearch(messageTypeSearchText)" md-item-text=item.name md-min-length=0 placeholder="{{\'tb.rulenode.message-type\' | translate }}" md-menu-class=tb-message-type-autocomplete> <span md-highlight-text=messageTypeSearchText md-highlight-flags=^i>{{item}}</span> <md-not-found> <div class=tb-not-found> <div class=tb-no-entries ng-if="!messageTypeSearchText || !messageTypeSearchText.length"> <span translate>tb.rulenode.no-message-types-found</span> </div> <div ng-if="messageTypeSearchText && messageTypeSearchText.length"> <span translate translate-values=\'{ messageType: "{{messageTypeSearchText | truncate:true:6:&apos;...&apos;}}" }\'>tb.rulenode.no-message-type-matching</span> <span> <a translate ng-click="createMessageType($event, \'#message_type_chips\')">tb.rulenode.create-new-message-type</a> </span> </div> </div> </md-not-found> </md-autocomplete> <md-chip-template> <span>{{$chip.name}}</span> </md-chip-template> </md-chips> <div class=tb-error-messages ng-messages=ngModelCtrl.$error role=alert> <div translate ng-message=messageTypes class=tb-error-message>tb.rulenode.message-types-required</div> </div> </section>'
}, function (e, t) {
    e.exports = ' <section layout=column> <label translate class="tb-title no-padding" class=required>tb.rulenode.originator-types-filter</label> <tb-entity-type-list flex ng-model=configuration.originatorTypes allowed-entity-types=allowedEntityTypes ignore-authority-filter=true tb-required=true> </tb-entity-type-list> </section> '
}, function (e, t) {
    e.exports = " <section layout=column> <label translate class=\"tb-title no-padding\">tb.rulenode.filter</label> <tb-js-func ng-model=configuration.jsScript function-name=Filter function-args=\"{{ ['msg', 'metadata', 'msgType'] }}\" no-validate=true> </tb-js-func> <div layout=row> <md-button ng-click=testScript($event) class=\"md-primary md-raised\"> {{ 'tb.rulenode.test-filter-function' | translate }} </md-button> </div> </section> "
}, function (e, t) {
    e.exports = " <section layout=column> <label translate class=\"tb-title no-padding\">tb.rulenode.switch</label> <tb-js-func ng-model=configuration.jsScript function-name=Switch function-args=\"{{ ['msg', 'metadata', 'msgType'] }}\" no-validate=true> </tb-js-func> <div layout=row> <md-button ng-click=testScript($event) class=\"md-primary md-raised\"> {{ 'tb.rulenode.test-switch-function' | translate }} </md-button> </div> </section> "
}, function (e, t) {
    e.exports = ' <section class=tb-kv-map-config layout=column> <div class=header flex layout=row> <span class=cell flex translate>{{ keyText }}</span> <span class=cell flex translate>{{ valText }}</span> <span ng-show=!disabled style=width:52px>&nbsp</span> </div> <div class=body> <div class=row ng-form name=kvForm flex layout=row layout-align="start center" ng-repeat="keyVal in kvList track by $index"> <md-input-container class="cell md-block" flex md-no-float> <input placeholder="{{ keyText | translate }}" ng-required=true name=key ng-model=keyVal.key> <div ng-messages=kvForm.key.$error> <div translate ng-message=required>{{keyRequiredText}}</div> </div> </md-input-container> <md-input-container class="cell md-block" flex md-no-float> <input placeholder="{{ valText | translate }}" ng-required=true name=value ng-model=keyVal.value> <div ng-messages=kvForm.value.$error> <div translate ng-message=required>{{valRequiredText}}</div> </div> </md-input-container> <md-button ng-show=!disabled ng-disabled=loading class="md-icon-button md-primary" ng-click=removeKeyVal($index) aria-label="{{ \'action.remove\' | translate }}"> <md-tooltip md-direction=top> {{ \'tb.key-val.remove-entry\' | translate }} </md-tooltip> <md-icon aria-label="{{ \'action.delete\' | translate }}" class=material-icons> close </md-icon> </md-button> </div> </div> <div class=tb-error-messages ng-messages=ngModelCtrl.$error role=alert> <div translate ng-message=kvMap class=tb-error-message>{{requiredText}}</div> </div> <div> <md-button ng-show=!disabled ng-disabled=loading class="md-primary md-raised" ng-click=addKeyVal() aria-label="{{ \'action.add\' | translate }}"> <md-tooltip md-direction=top> {{ \'tb.key-val.add-entry\' | translate }} </md-tooltip> <md-icon aria-label="{{ \'action.add\' | translate }}" class=material-icons> add </md-icon> {{ \'action.add\' | translate }} </md-button> </div> </section> '
}, function (e, t) {
    e.exports = " <section layout=column> <div layout=row> <md-input-container class=md-block style=min-width:100px> <label translate>relation.direction</label> <md-select required ng-model=query.direction> <md-option ng-repeat=\"direction in types.entitySearchDirection\" ng-value=direction> {{ ('relation.search-direction.' + direction) | translate}} </md-option> </md-select> </md-input-container> <md-input-container class=md-block> <label translate>tb.rulenode.max-relation-level</label> <input name=maxRelationLevel type=number min=1 step=1 placeholder=\"{{ 'tb.rulenode.unlimited-level' | translate }}\" ng-model=query.maxLevel aria-label=\"{{ 'tb.rulenode.max-relation-level' | translate }}\"> </md-input-container> </div> <div class=md-caption style=padding-bottom:10px;color:rgba(0,0,0,.57) translate>relation.relation-filters</div> <tb-relation-filters ng-model=query.filters> </tb-relation-filters> </section> "
}, function (e, t) {
    e.exports = ' <section layout=column> <md-input-container class=md-block> <label translate>tb.rulenode.originator-source</label> <md-select required ng-model=configuration.originatorSource> <md-option ng-repeat="source in ruleNodeTypes.originatorSource" ng-value=source.value> {{ source.name | translate}} </md-option> </md-select> </md-input-container> <section layout=column ng-if="configuration.originatorSource == ruleNodeTypes.originatorSource.RELATED.value"> <label translate class="tb-title tb-required">tb.rulenode.relations-query</label> <tb-relations-query-config style=padding-bottom:15px ng-model=configuration.relationsQuery> </tb-relations-query-config> </section> </section> '
}, function (e, t) {
    e.exports = " <section layout=column> <label translate class=\"tb-title no-padding\">tb.rulenode.transform</label> <tb-js-func ng-model=configuration.jsScript function-name=Transform function-args=\"{{ ['msg', 'metadata', 'msgType'] }}\" no-validate=true> </tb-js-func> <div layout=row style=padding-bottom:15px> <md-button ng-click=testScript($event) class=\"md-primary md-raised\"> {{ 'tb.rulenode.test-transformer-function' | translate }} </md-button> </div> </section> "
}, function (e, t) {
    e.exports = " <section ng-form name=toEmailConfigForm layout=column> <md-input-container class=md-block> <label translate>tb.rulenode.from-template</label> <textarea ng-required=true name=fromTemplate ng-model=configuration.fromTemplate rows=2></textarea> <div ng-messages=toEmailConfigForm.fromTemplate.$error> <div ng-message=required translate>tb.rulenode.from-template-required</div> </div> <div class=tb-hint translate>tb.rulenode.from-template-hint</div> </md-input-container> <md-input-container class=md-block> <label translate>tb.rulenode.to-template</label> <textarea ng-required=true name=toTemplate ng-model=configuration.toTemplate rows=2></textarea> <div ng-messages=toEmailConfigForm.toTemplate.$error> <div ng-message=required translate>tb.rulenode.to-template-required</div> </div> <div class=tb-hint translate>tb.rulenode.mail-address-list-template-hint</div> </md-input-container> <md-input-container class=md-block> <label translate>tb.rulenode.cc-template</label> <textarea name=ccTemplate ng-model=configuration.ccTemplate rows=2></textarea> <div class=tb-hint translate>tb.rulenode.mail-address-list-template-hint</div> </md-input-container> <md-input-container class=md-block> <label translate>tb.rulenode.bcc-template</label> <textarea name=ccTemplate ng-model=configuration.bccTemplate rows=2></textarea> <div class=tb-hint translate>tb.rulenode.mail-address-list-template-hint</div> </md-input-container> <md-input-container class=md-block> <label translate>tb.rulenode.subject-template</label> <textarea ng-required=true name=subjectTemplate ng-model=configuration.subjectTemplate rows=2></textarea> <div ng-messages=toEmailConfigForm.subjectTemplate.$error> <div ng-message=required translate>tb.rulenode.subject-template-required</div> </div> <div class=tb-hint translate>tb.rulenode.subject-template-hint</div> </md-input-container> <md-input-container class=md-block> <label translate>tb.rulenode.body-template</label> <textarea ng-required=true name=bodyTemplate ng-model=configuration.bodyTemplate rows=6></textarea> <div ng-messages=toEmailConfigForm.bodyTemplate.$error> <div ng-message=required translate>tb.rulenode.body-template-required</div> </div> <div class=tb-hint translate>tb.rulenode.body-template-hint</div> </md-input-container> </section> "
}, function (e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {default: e}
    }

    function a(e, t) {
        var n = function (n, i, a, r) {
            var l = o.default;
            i.html(l), n.types = t, n.$watch("configuration", function (e, t) {
                angular.equals(e, t) || r.$setViewValue(n.configuration)
            }), r.$render = function () {
                n.configuration = r.$viewValue
            }, e(i.contents())(n)
        };
        return {restrict: "E", require: "^ngModel", scope: {}, link: n}
    }

    a.$inject = ["$compile", "types"], Object.defineProperty(t, "__esModule", {value: !0}), t.default = a;
    var r = n(6), o = i(r)
}, function (e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {default: e}
    }

    function a(e, t) {
        var n = function (n, i, a, r) {
            var l = o.default;
            i.html(l), n.types = t, n.$watch("configuration", function (e, t) {
                angular.equals(e, t) || r.$setViewValue(n.configuration)
            }), r.$render = function () {
                n.configuration = r.$viewValue
            }, e(i.contents())(n)
        };
        return {restrict: "E", require: "^ngModel", scope: {}, link: n}
    }

    a.$inject = ["$compile", "types"], Object.defineProperty(t, "__esModule", {value: !0}), t.default = a;
    var r = n(7), o = i(r)
}, function (e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {default: e}
    }

    function a(e, t, n, i) {
        var a = function (a, r, l, s) {
            var d = o.default;
            r.html(d), a.types = n, a.$watch("configuration", function (e, t) {
                angular.equals(e, t) || s.$setViewValue(a.configuration)
            }), s.$render = function () {
                a.configuration = s.$viewValue
            }, a.testDetailsBuildJs = function (e) {
                var n = angular.copy(a.configuration.alarmDetailsBuildJs);
                i.testNodeScript(e, n, "json", t.instant("tb.rulenode.details") + "", "Details", ["msg", "metadata", "msgType"], a.ruleNodeId).then(function (e) {
                    a.configuration.alarmDetailsBuildJs = e, s.$setDirty()
                })
            }, e(r.contents())(a)
        };
        return {restrict: "E", require: "^ngModel", scope: {ruleNodeId: "="}, link: a}
    }

    a.$inject = ["$compile", "$translate", "types", "ruleNodeScriptTest"], Object.defineProperty(t, "__esModule", {value: !0}), t.default = a;
    var r = n(8), o = i(r)
}, function (e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {default: e}
    }

    function a(e, t, n, i) {
        var a = function (a, r, l, s) {
            var d = o.default;
            r.html(d), a.types = n, a.$watch("configuration", function (e, t) {
                angular.equals(e, t) || s.$setViewValue(a.configuration)
            }), s.$render = function () {
                a.configuration = s.$viewValue
            }, a.testDetailsBuildJs = function (e) {
                var n = angular.copy(a.configuration.alarmDetailsBuildJs);
                i.testNodeScript(e, n, "json", t.instant("tb.rulenode.details") + "", "Details", ["msg", "metadata", "msgType"], a.ruleNodeId).then(function (e) {
                    a.configuration.alarmDetailsBuildJs = e, s.$setDirty()
                })
            }, e(r.contents())(a)
        };
        return {restrict: "E", require: "^ngModel", scope: {ruleNodeId: "="}, link: a}
    }

    a.$inject = ["$compile", "$translate", "types", "ruleNodeScriptTest"], Object.defineProperty(t, "__esModule", {value: !0}), t.default = a;
    var r = n(9), o = i(r)
}, function (e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {default: e}
    }

    function a(e, t) {
        var n = function (n, i, a, r) {
            var l = o.default;
            i.html(l), n.types = t, n.$watch("configuration", function (e, t) {
                angular.equals(e, t) || r.$setViewValue(n.configuration)
            }), r.$render = function () {
                n.configuration = r.$viewValue
            }, e(i.contents())(n)
        };
        return {restrict: "E", require: "^ngModel", scope: {}, link: n}
    }

    a.$inject = ["$compile", "types"], Object.defineProperty(t, "__esModule", {value: !0}), t.default = a;
    var r = n(10), o = i(r)
}, function (e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {default: e}
    }

    function a(e, t) {
        var n = function (n, i, a, r) {
            var l = o.default;
            i.html(l), n.types = t, n.$watch("configuration", function (e, t) {
                angular.equals(e, t) || r.$setViewValue(n.configuration)
            }), r.$render = function () {
                n.configuration = r.$viewValue
            }, e(i.contents())(n)
        };
        return {restrict: "E", require: "^ngModel", scope: {}, link: n}
    }

    a.$inject = ["$compile", "types"], Object.defineProperty(t, "__esModule", {value: !0}), t.default = a;
    var r = n(11), o = i(r)
}, function (e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {default: e}
    }

    function a(e, t, n, i) {
        var a = function (a, r, l, s) {
            var d = o.default;
            r.html(d), a.types = n, a.originator = null, a.$watch("configuration", function (e, t) {
                angular.equals(e, t) || s.$setViewValue(a.configuration)
            }), s.$render = function () {
                a.configuration = s.$viewValue, a.configuration.originatorId && a.configuration.originatorType ? a.originator = {
                    id: a.configuration.originatorId,
                    entityType: a.configuration.originatorType
                } : a.originator = null, a.$watch("originator", function (e, t) {
                    angular.equals(e, t) || (a.originator ? (s.$viewValue.originatorId = a.originator.id, s.$viewValue.originatorType = a.originator.entityType) : (s.$viewValue.originatorId = null, s.$viewValue.originatorType = null))
                }, !0)
            }, a.testScript = function (e) {
                var n = angular.copy(a.configuration.jsScript);
                i.testNodeScript(e, n, "generate", t.instant("tb.rulenode.generator") + "", "Generate", ["prevMsg", "prevMetadata", "prevMsgType"], a.ruleNodeId).then(function (e) {
                    a.configuration.jsScript = e, s.$setDirty()
                })
            }, e(r.contents())(a)
        };
        return {restrict: "E", require: "^ngModel", scope: {ruleNodeId: "="}, link: a}
    }

    a.$inject = ["$compile", "$translate", "types", "ruleNodeScriptTest"], Object.defineProperty(t, "__esModule", {value: !0}), t.default = a, n(1);
    var r = n(12), o = i(r)
}, function (e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {default: e}
    }

    function a(e, t) {
        var n = function (n, i, a, r) {
            var l = o.default;
            i.html(l), n.ruleNodeTypes = t, n.$watch("configuration", function (e, t) {
                angular.equals(e, t) || r.$setViewValue(n.configuration)
            }), r.$render = function () {
                n.configuration = r.$viewValue
            }, e(i.contents())(n)
        };
        return {restrict: "E", require: "^ngModel", scope: {readonly: "=ngReadonly"}, link: n}
    }

    a.$inject = ["$compile", "ruleNodeTypes"], Object.defineProperty(t, "__esModule", {value: !0}), t.default = a;
    var r = n(13), o = i(r)
}, function (e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {default: e}
    }

    Object.defineProperty(t, "__esModule", {value: !0});
    var a = n(72), r = i(a), o = n(51), l = i(o), s = n(56), d = i(s), u = n(53), c = i(u), m = n(52), g = i(m),
        p = n(60), f = i(p), b = n(66), v = i(b), y = n(67), h = i(y), q = n(65), $ = i(q), x = n(59), k = i(x),
        T = n(70), C = i(T), w = n(71), M = i(w), N = n(64), _ = i(N), S = n(61), E = i(S), P = n(69), F = i(P),
        V = n(63), A = i(V), I = n(62), j = i(I), O = n(50), D = i(O), R = n(73), K = i(R), L = n(55), U = i(L),
        z = n(54), B = i(z), H = n(68), Y = i(H), G = n(57), Q = i(G);
    t.default = angular.module("thingsboard.ruleChain.config.action", []).directive("tbActionNodeTimeseriesConfig", r.default).directive("tbActionNodeAttributesConfig", l.default).directive("tbActionNodeGeneratorConfig", d.default).directive("tbActionNodeCreateAlarmConfig", c.default).directive("tbActionNodeClearAlarmConfig", g.default).directive("tbActionNodeLogConfig", f.default).directive("tbActionNodeRpcReplyConfig", v.default).directive("tbActionNodeRpcRequestConfig", h.default).directive("tbActionNodeRestApiCallConfig", $.default).directive("tbActionNodeKafkaConfig", k.default).directive("tbActionNodeSnsConfig", C.default).directive("tbActionNodeSqsConfig", M.default).directive("tbActionNodeRabbitMqConfig", _.default).directive("tbActionNodeMqttConfig", E.default).directive("tbActionNodeSendEmailConfig", F.default).directive("tbActionNodeMsgDelayConfig", A.default).directive("tbActionNodeMsgCountConfig", j.default).directive("tbActionNodeAssignToCustomerConfig", D.default).directive("tbActionNodeUnAssignToCustomerConfig", K.default).directive("tbActionNodeDeleteRelationConfig", U.default).directive("tbActionNodeCreateRelationConfig", B.default).directive("tbActionNodeCustomTableConfig", Y.default).directive("tbActionNodeGpsGeofencingConfig", Q.default).name
}, function (e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {default: e}
    }

    function a(e) {
        var t = function (t, n, i, a) {
            var r = o.default;
            n.html(r), t.ackValues = ["all", "-1", "0", "1"], t.$watch("configuration", function (e, n) {
                angular.equals(e, n) || a.$setViewValue(t.configuration)
            }), a.$render = function () {
                t.configuration = a.$viewValue
            }, e(n.contents())(t)
        };
        return {restrict: "E", require: "^ngModel", scope: {}, link: t}
    }

    a.$inject = ["$compile"], Object.defineProperty(t, "__esModule", {value: !0}), t.default = a;
    var r = n(14), o = i(r)
}, function (e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {default: e}
    }

    function a(e, t, n) {
        var i = function (i, a, r, l) {
            var s = o.default;
            a.html(s), i.$watch("configuration", function (e, t) {
                angular.equals(e, t) || l.$setViewValue(i.configuration)
            }), l.$render = function () {
                i.configuration = l.$viewValue
            }, i.testScript = function (e) {
                var a = angular.copy(i.configuration.jsScript);
                n.testNodeScript(e, a, "string", t.instant("tb.rulenode.to-string") + "", "ToString", ["msg", "metadata", "msgType"], i.ruleNodeId).then(function (e) {
                    i.configuration.jsScript = e, l.$setDirty()
                })
            }, e(a.contents())(i)
        };
        return {restrict: "E", require: "^ngModel", scope: {ruleNodeId: "="}, link: i}
    }

    a.$inject = ["$compile", "$translate", "ruleNodeScriptTest"], Object.defineProperty(t, "__esModule", {value: !0}), t.default = a;
    var r = n(15), o = i(r)
}, function (e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {default: e}
    }

    function a(e, t, n) {
        var i = function (i, a, r, l) {
            var s = o.default;
            a.html(s), i.$mdExpansionPanel = t, i.ruleNodeTypes = n, i.credentialsTypeChanged = function () {
                var e = i.configuration.credentials.type;
                i.configuration.credentials = {}, i.configuration.credentials.type = e, i.updateValidity()
            }, i.certFileAdded = function (e, t) {
                var n = new FileReader;
                n.onload = function (n) {
                    i.$apply(function () {
                        if (n.target.result) {
                            l.$setDirty();
                            var a = n.target.result;
                            a && a.length > 0 && ("caCert" == t && (i.configuration.credentials.caCertFileName = e.name, i.configuration.credentials.caCert = a), "privateKey" == t && (i.configuration.credentials.privateKeyFileName = e.name, i.configuration.credentials.privateKey = a), "Cert" == t && (i.configuration.credentials.certFileName = e.name, i.configuration.credentials.cert = a)), i.updateValidity()
                        }
                    })
                }, n.readAsText(e.file)
            }, i.clearCertFile = function (e) {
                l.$setDirty(), "caCert" == e && (i.configuration.credentials.caCertFileName = null, i.configuration.credentials.caCert = null), "privateKey" == e && (i.configuration.credentials.privateKeyFileName = null, i.configuration.credentials.privateKey = null), "Cert" == e && (i.configuration.credentials.certFileName = null, i.configuration.credentials.cert = null), i.updateValidity()
            }, i.updateValidity = function () {
                var e = !0, t = i.configuration.credentials;
                t.type == n.mqttCredentialTypes["cert.PEM"].value && (t.caCert && t.cert && t.privateKey || (e = !1)), l.$setValidity("Certs", e)
            }, i.$watch("configuration", function (e, t) {
                angular.equals(e, t) || l.$setViewValue(i.configuration)
            }), l.$render = function () {
                i.configuration = l.$viewValue
            }, e(a.contents())(i)
        };
        return {restrict: "E", require: "^ngModel", scope: {readonly: "=ngReadonly"}, link: i}
    }

    a.$inject = ["$compile", "$mdExpansionPanel", "ruleNodeTypes"], Object.defineProperty(t, "__esModule", {value: !0}), t.default = a, n(2);
    var r = n(16), o = i(r)
}, function (e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {default: e}
    }

    function a(e) {
        var t = function (t, n, i, a) {
            var r = o.default;
            n.html(r), t.$watch("configuration", function (e, n) {
                angular.equals(e, n) || a.$setViewValue(t.configuration)
            }), a.$render = function () {
                t.configuration = a.$viewValue
            }, e(n.contents())(t)
        };
        return {restrict: "E", require: "^ngModel", scope: {}, link: t}
    }

    a.$inject = ["$compile"], Object.defineProperty(t, "__esModule", {value: !0}), t.default = a;
    var r = n(17), o = i(r)
}, function (e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {default: e}
    }

    function a(e) {
        var t = function (t, n, i, a) {
            var r = o.default;
            n.html(r), t.$watch("configuration", function (e, n) {
                angular.equals(e, n) || a.$setViewValue(t.configuration)
            }), a.$render = function () {
                t.configuration = a.$viewValue
            }, e(n.contents())(t)
        };
        return {restrict: "E", require: "^ngModel", scope: {}, link: t}
    }

    a.$inject = ["$compile"], Object.defineProperty(t, "__esModule", {value: !0}), t.default = a;
    var r = n(18), o = i(r)
}, function (e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {default: e}
    }

    function a(e) {
        var t = function (t, n, i, a) {
            var r = o.default;
            n.html(r), t.messageProperties = [null, "BASIC", "TEXT_PLAIN", "MINIMAL_BASIC", "MINIMAL_PERSISTENT_BASIC", "PERSISTENT_BASIC", "PERSISTENT_TEXT_PLAIN"], t.$watch("configuration", function (e, n) {
                angular.equals(e, n) || a.$setViewValue(t.configuration)
            }), a.$render = function () {
                t.configuration = a.$viewValue
            }, e(n.contents())(t)
        };
        return {restrict: "E", require: "^ngModel", scope: {readonly: "=ngReadonly"}, link: t}
    }

    a.$inject = ["$compile"], Object.defineProperty(t, "__esModule", {value: !0}), t.default = a;
    var r = n(19), o = i(r)
}, function (e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {default: e}
    }

    function a(e, t) {
        var n = function (n, i, a, r) {
            var l = o.default;
            i.html(l), n.ruleNodeTypes = t, n.$watch("configuration", function (e, t) {
                angular.equals(e, t) || r.$setViewValue(n.configuration)
            }), r.$render = function () {
                n.configuration = r.$viewValue
            }, e(i.contents())(n)
        };
        return {restrict: "E", require: "^ngModel", scope: {readonly: "=ngReadonly"}, link: n}
    }

    a.$inject = ["$compile", "ruleNodeTypes"], Object.defineProperty(t, "__esModule", {value: !0}), t.default = a;
    var r = n(20), o = i(r)
}, function (e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {default: e}
    }

    function a(e) {
        var t = function (t, n, i, a) {
            var r = o.default;
            n.html(r), t.$watch("configuration", function (e, n) {
                angular.equals(e, n) || a.$setViewValue(t.configuration)
            }), a.$render = function () {
                t.configuration = a.$viewValue
            }, e(n.contents())(t)
        };
        return {restrict: "E", require: "^ngModel", scope: {}, link: t}
    }

    a.$inject = ["$compile"], Object.defineProperty(t, "__esModule", {value: !0}), t.default = a;
    var r = n(21), o = i(r)
}, function (e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {default: e}
    }

    function a(e) {
        var t = function (t, n, i, a) {
            var r = o.default;
            n.html(r), t.$watch("configuration", function (e, n) {
                angular.equals(e, n) || a.$setViewValue(t.configuration)
            }), a.$render = function () {
                t.configuration = a.$viewValue
            }, e(n.contents())(t)
        };
        return {restrict: "E", require: "^ngModel", scope: {}, link: t}
    }

    a.$inject = ["$compile"], Object.defineProperty(t, "__esModule", {value: !0}), t.default = a;
    var r = n(22), o = i(r)
}, function (e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {default: e}
    }

    function a(e) {
        var t = function (t, n, i, a) {
            var r = o.default;
            n.html(r), t.$watch("configuration", function (e, n) {
                angular.equals(e, n) || a.$setViewValue(t.configuration)
            }), a.$render = function () {
                t.configuration = a.$viewValue
            }, e(n.contents())(t)
        };
        return {restrict: "E", require: "^ngModel", scope: {}, link: t}
    }

    a.$inject = ["$compile"], Object.defineProperty(t, "__esModule", {value: !0}), t.default = a;
    var r = n(23), o = i(r)
}, function (e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {default: e}
    }

    function a(e) {
        var t = function (t, n, i, a) {
            var r = o.default;
            n.html(r), t.smtpProtocols = ["smtp", "smtps"], t.$watch("configuration", function (e, n) {
                angular.equals(e, n) || a.$setViewValue(t.configuration)
            }), a.$render = function () {
                t.configuration = a.$viewValue
            }, e(n.contents())(t)
        };
        return {restrict: "E", require: "^ngModel", scope: {readonly: "=ngReadonly"}, link: t}
    }

    a.$inject = ["$compile"], Object.defineProperty(t, "__esModule", {value: !0}), t.default = a;
    var r = n(24), o = i(r)
}, function (e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {default: e}
    }

    function a(e) {
        var t = function (t, n, i, a) {
            var r = o.default;
            n.html(r), t.$watch("configuration", function (e, n) {
                angular.equals(e, n) || a.$setViewValue(t.configuration)
            }), a.$render = function () {
                t.configuration = a.$viewValue
            }, e(n.contents())(t)
        };
        return {restrict: "E", require: "^ngModel", scope: {}, link: t}
    }

    a.$inject = ["$compile"], Object.defineProperty(t, "__esModule", {value: !0}), t.default = a;
    var r = n(25), o = i(r)
}, function (e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {default: e}
    }

    function a(e, t) {
        var n = function (n, i, a, r) {
            var l = o.default;
            i.html(l), n.ruleNodeTypes = t, n.$watch("configuration", function (e, t) {
                angular.equals(e, t) || r.$setViewValue(n.configuration)
            }), r.$render = function () {
                n.configuration = r.$viewValue
            }, e(i.contents())(n)
        };
        return {restrict: "E", require: "^ngModel", scope: {readonly: "=ngReadonly"}, link: n}
    }

    a.$inject = ["$compile", "ruleNodeTypes"], Object.defineProperty(t, "__esModule", {value: !0}), t.default = a;
    var r = n(26), o = i(r)
}, function (e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {default: e}
    }

    function a(e) {
        var t = function (t, n, i, a) {
            var r = o.default;
            n.html(r), t.$watch("configuration", function (e, n) {
                angular.equals(e, n) || a.$setViewValue(t.configuration)
            }), a.$render = function () {
                t.configuration = a.$viewValue
            }, e(n.contents())(t)
        };
        return {restrict: "E", require: "^ngModel", scope: {}, link: t}
    }

    a.$inject = ["$compile"], Object.defineProperty(t, "__esModule", {value: !0}), t.default = a;
    var r = n(27), o = i(r)
}, function (e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {default: e}
    }

    function a(e, t) {
        var n = function (n, i, a, r) {
            var l = o.default;
            i.html(l), n.types = t, n.$watch("configuration", function (e, t) {
                angular.equals(e, t) || r.$setViewValue(n.configuration)
            }), r.$render = function () {
                n.configuration = r.$viewValue
            }, e(i.contents())(n)
        };
        return {restrict: "E", require: "^ngModel", scope: {}, link: n}
    }

    a.$inject = ["$compile", "types"], Object.defineProperty(t, "__esModule", {value: !0}), t.default = a;
    var r = n(28), o = i(r)
}, function (e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {default: e}
    }

    function a(e, t) {
        var n = function (n, i, a, r) {
            var l = o.default;
            i.html(l), n.types = t, n.$watch("query", function (e, t) {
                angular.equals(e, t) || r.$setViewValue(n.query)
            }), r.$render = function () {
                n.query = r.$viewValue
            }, e(i.contents())(n)
        };
        return {restrict: "E", require: "^ngModel", scope: {}, link: n}
    }

    a.$inject = ["$compile", "types"], Object.defineProperty(t, "__esModule", {value: !0}), t.default = a;
    var r = n(29), o = i(r)
}, function (e, t) {
    "use strict";

    function n(e) {
        var t = function (t, n, i, a) {
            n.html("<div></div>"), t.$watch("configuration", function (e, n) {
                angular.equals(e, n) || a.$setViewValue(t.configuration)
            }), a.$render = function () {
                t.configuration = a.$viewValue
            }, e(n.contents())(t)
        };
        return {restrict: "E", require: "^ngModel", scope: {}, link: t}
    }

    n.$inject = ["$compile"], Object.defineProperty(t, "__esModule", {value: !0}), t.default = n
}, function (e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {default: e}
    }

    function a(e) {
        var t = function (t, n, i, a) {
            var r = o.default;
            n.html(r), t.$watch("configuration", function (e, n) {
                angular.equals(e, n) || a.$setViewValue(t.configuration)
            }), a.$render = function () {
                t.configuration = a.$viewValue
            }, e(n.contents())(t)
        };
        return {restrict: "E", require: "^ngModel", scope: {}, link: t}
    }

    a.$inject = ["$compile"], Object.defineProperty(t, "__esModule", {value: !0}), t.default = a;
    var r = n(30), o = i(r)
}, function (e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {default: e}
    }

    function a(e, t) {
        var n = function (n, i, a, r) {
            var l = o.default;
            i.html(l);
            var s = 186;
            n.separatorKeys = [t.KEY_CODE.ENTER, t.KEY_CODE.COMMA, s], n.$watch("configuration", function (e, t) {
                angular.equals(e, t) || r.$setViewValue(n.configuration)
            }), r.$render = function () {
                n.configuration = r.$viewValue
            }, e(i.contents())(n)
        };
        return {restrict: "E", require: "^ngModel", scope: {}, link: n}
    }

    a.$inject = ["$compile", "$mdConstant"], Object.defineProperty(t, "__esModule", {value: !0}), t.default = a;
    var r = n(31), o = i(r)
}, function (e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {default: e}
    }

    function a(e, t) {
        var n = function (n, i, a, r) {
            var l = o.default;
            i.html(l), n.ruleNodeTypes = t, n.$watch("configuration", function (e, t) {
                angular.equals(e, t) || r.$setViewValue(n.configuration)
            }), n.entityDetailsList = [];
            for (var s in t.entityDetails) {
                var d = s;
                n.entityDetailsList.push(d)
            }
            r.$render = function () {
                n.configuration = r.$viewValue
            }, e(i.contents())(n)
        };
        return {restrict: "E", require: "^ngModel", scope: {}, link: n}
    }

    a.$inject = ["$compile", "ruleNodeTypes"], Object.defineProperty(t, "__esModule", {value: !0}), t.default = a;
    var r = n(32), o = i(r)
}, function (e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {default: e}
    }

    function a(e, t, n) {
        var i = function (i, a, r, l) {
            var s = o.default;
            a.html(s);
            var d = 186;
            i.separatorKeys = [t.KEY_CODE.ENTER, t.KEY_CODE.COMMA, d], i.ruleNodeTypes = n, i.aggPeriodTimeUnits = {}, i.aggPeriodTimeUnits.MINUTES = n.timeUnit.MINUTES, i.aggPeriodTimeUnits.HOURS = n.timeUnit.HOURS, i.aggPeriodTimeUnits.DAYS = n.timeUnit.DAYS, i.aggPeriodTimeUnits.MILLISECONDS = n.timeUnit.MILLISECONDS, i.aggPeriodTimeUnits.SECONDS = n.timeUnit.SECONDS, i.$watch("configuration", function (e, t) {
                angular.equals(e, t) || l.$setViewValue(i.configuration)
            }), l.$render = function () {
                i.configuration = l.$viewValue
            }, e(a.contents())(i)
        };
        return {restrict: "E", require: "^ngModel", scope: {}, link: i}
    }

    a.$inject = ["$compile", "$mdConstant", "ruleNodeTypes"], Object.defineProperty(t, "__esModule", {value: !0}), t.default = a;
    var r = n(33), o = i(r);
    n(3)
}, function (e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {default: e}
    }

    Object.defineProperty(t, "__esModule", {value: !0});
    var a = n(81), r = i(a), o = n(82), l = i(o), s = n(77), d = i(s), u = n(83), c = i(u), m = n(76), g = i(m),
        p = n(84), f = i(p), b = n(79), v = i(b), y = n(78), h = i(y);
    t.default = angular.module("thingsboard.ruleChain.config.enrichment", []).directive("tbEnrichmentNodeOriginatorAttributesConfig", r.default).directive("tbEnrichmentNodeOriginatorFieldsConfig", l.default).directive("tbEnrichmentNodeDeviceAttributesConfig", d.default).directive("tbEnrichmentNodeRelatedAttributesConfig", c.default).directive("tbEnrichmentNodeCustomerAttributesConfig", g.default).directive("tbEnrichmentNodeTenantAttributesConfig", f.default).directive("tbEnrichmentNodeGetTelemetryFromDatabase", v.default).directive("tbEnrichmentNodeEntityDetailsConfig", h.default).name
}, function (e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {default: e}
    }

    function a(e, t) {
        var n = function (n, i, a, r) {
            var l = o.default;
            i.html(l);
            var s = 186;
            n.separatorKeys = [t.KEY_CODE.ENTER, t.KEY_CODE.COMMA, s], n.$watch("configuration", function (e, t) {
                angular.equals(e, t) || r.$setViewValue(n.configuration)
            }), r.$render = function () {
                n.configuration = r.$viewValue
            }, e(i.contents())(n)
        };
        return {restrict: "E", require: "^ngModel", scope: {}, link: n}
    }

    a.$inject = ["$compile", "$mdConstant"], Object.defineProperty(t, "__esModule", {value: !0}), t.default = a;
    var r = n(34), o = i(r)
}, function (e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {default: e}
    }

    function a(e) {
        var t = function (t, n, i, a) {
            var r = o.default;
            n.html(r), t.$watch("configuration", function (e, n) {
                angular.equals(e, n) || a.$setViewValue(t.configuration)
            }), a.$render = function () {
                t.configuration = a.$viewValue
            }, e(n.contents())(t)
        };
        return {restrict: "E", require: "^ngModel", scope: {}, link: t}
    }

    a.$inject = ["$compile"], Object.defineProperty(t, "__esModule", {value: !0}), t.default = a;
    var r = n(35), o = i(r)
}, function (e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {default: e}
    }

    function a(e) {
        var t = function (t, n, i, a) {
            var r = o.default;
            n.html(r), t.$watch("configuration", function (e, n) {
                angular.equals(e, n) || a.$setViewValue(t.configuration)
            }), a.$render = function () {
                t.configuration = a.$viewValue
            }, e(n.contents())(t)
        };
        return {restrict: "E", require: "^ngModel", scope: {}, link: t}
    }

    a.$inject = ["$compile"], Object.defineProperty(t, "__esModule", {value: !0}), t.default = a;
    var r = n(36), o = i(r)
}, function (e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {default: e}
    }

    function a(e) {
        var t = function (t, n, i, a) {
            var r = o.default;
            n.html(r), t.$watch("configuration", function (e, n) {
                angular.equals(e, n) || a.$setViewValue(t.configuration)
            }), a.$render = function () {
                t.configuration = a.$viewValue
            }, e(n.contents())(t)
        };
        return {restrict: "E", require: "^ngModel", scope: {}, link: t}
    }

    a.$inject = ["$compile"], Object.defineProperty(t, "__esModule", {value: !0}), t.default = a;
    var r = n(37), o = i(r)
}, function (e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {default: e}
    }

    function a(e, t) {
        var n = function (n, i, a, r) {
            var l = o.default;
            i.html(l);
            var s = 186;
            n.separatorKeys = [t.KEY_CODE.ENTER, t.KEY_CODE.COMMA, s], n.$watch("configuration", function (e, t) {
                angular.equals(e, t) || r.$setViewValue(n.configuration)
            }), r.$render = function () {
                n.configuration = r.$viewValue
            }, e(i.contents())(n)
        };
        return {restrict: "E", require: "^ngModel", scope: {}, link: n}
    }

    a.$inject = ["$compile", "$mdConstant"], Object.defineProperty(t, "__esModule", {value: !0}), t.default = a;
    var r = n(38), o = i(r)
}, function (e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {default: e}
    }

    function a(e, t) {
        var n = function (n, i, a, r) {
            var l = o.default;
            i.html(l), n.types = t, n.$watch("configuration", function (e, t) {
                angular.equals(e, t) || r.$setViewValue(n.configuration)
            }), r.$render = function () {
                n.configuration = r.$viewValue
            }, e(i.contents())(n)
        };
        return {restrict: "E", require: "^ngModel", scope: {}, link: n}
    }

    a.$inject = ["$compile", "types"], Object.defineProperty(t, "__esModule", {value: !0}), t.default = a;
    var r = n(39), o = i(r)
}, function (e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {default: e}
    }

    function a(e, t) {
        var n = function (n, i, a, r) {
            var l = o.default;
            i.html(l), n.ruleNodeTypes = t, n.$watch("configuration", function (e, t) {
                angular.equals(e, t) || r.$setViewValue(n.configuration)
            }), r.$render = function () {
                n.configuration = r.$viewValue
            }, e(i.contents())(n)
        };
        return {restrict: "E", require: "^ngModel", scope: {readonly: "=ngReadonly"}, link: n}
    }

    a.$inject = ["$compile", "ruleNodeTypes"], Object.defineProperty(t, "__esModule", {value: !0}), t.default = a;
    var r = n(40), o = i(r)
}, function (e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {default: e}
    }

    Object.defineProperty(t, "__esModule", {value: !0});
    var a = n(91), r = i(a), o = n(89), l = i(o), s = n(92), d = i(s), u = n(86), c = i(u), m = n(90), g = i(m),
        p = n(85), f = i(p), b = n(87), v = i(b);
    t.default = angular.module("thingsboard.ruleChain.config.filter", []).directive("tbFilterNodeScriptConfig", r.default).directive("tbFilterNodeMessageTypeConfig", l.default).directive("tbFilterNodeSwitchConfig", d.default).directive("tbFilterNodeCheckRelationConfig", c.default).directive("tbFilterNodeOriginatorTypeConfig", g.default).directive("tbFilterNodeCheckMessageConfig", f.default).directive("tbFilterNodeGpsGeofencingConfig", v.default).name
}, function (e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {default: e}
    }

    function a(e, t, n) {
        var i = function (i, a, r, l) {
            function s() {
                if (l.$viewValue) {
                    for (var e = [], t = 0; t < i.messageTypes.length; t++) e.push(i.messageTypes[t].value);
                    l.$viewValue.messageTypes = e, d()
                }
            }

            function d() {
                if (i.required) {
                    var e = !(!l.$viewValue.messageTypes || !l.$viewValue.messageTypes.length);
                    l.$setValidity("messageTypes", e)
                } else l.$setValidity("messageTypes", !0)
            }

            var u = o.default;
            a.html(u), i.selectedMessageType = null, i.messageTypeSearchText = null, i.ngModelCtrl = l;
            var c = [];
            for (var m in n.messageType) {
                var g = {name: n.messageType[m].name, value: n.messageType[m].value};
                c.push(g)
            }
            i.transformMessageTypeChip = function (e) {
                var n, i = t("filter")(c, {name: e}, !0);
                return n = i && i.length ? angular.copy(i[0]) : {name: e, value: e}
            }, i.messageTypesSearch = function (e) {
                var n = e ? t("filter")(c, {name: e}) : c;
                return n.map(function (e) {
                    return e.name
                })
            }, i.createMessageType = function (e, t) {
                var n = angular.element(t, a)[0].firstElementChild, i = angular.element(n),
                    r = i.scope().$mdChipsCtrl.getChipBuffer();
                e.preventDefault(), e.stopPropagation(), i.scope().$mdChipsCtrl.appendChip(r.trim()), i.scope().$mdChipsCtrl.resetChipBuffer()
            }, l.$render = function () {
                i.messageTypesWatch && (i.messageTypesWatch(), i.messageTypesWatch = null);
                var e = l.$viewValue, t = [];
                if (e && e.messageTypes) for (var a = 0; a < e.messageTypes.length; a++) {
                    var r = e.messageTypes[a];
                    n.messageType[r] ? t.push(angular.copy(n.messageType[r])) : t.push({name: r, value: r})
                }
                i.messageTypes = t, i.messageTypesWatch = i.$watch("messageTypes", function (e, t) {
                    angular.equals(e, t) || s()
                }, !0)
            }, e(a.contents())(i)
        };
        return {restrict: "E", require: "^ngModel", scope: {required: "=ngRequired", readonly: "=ngReadonly"}, link: i}
    }

    a.$inject = ["$compile", "$filter", "types"], Object.defineProperty(t, "__esModule", {value: !0}), t.default = a, n(4);
    var r = n(41), o = i(r)
}, function (e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {default: e}
    }

    function a(e, t) {
        var n = function (n, i, a, r) {
            var l = o.default;
            i.html(l), n.allowedEntityTypes = [t.entityType.device, t.entityType.asset, t.entityType.tenant, t.entityType.customer, t.entityType.user, t.entityType.dashboard, t.entityType.rulechain, t.entityType.rulenode], n.$watch("configuration", function (e, t) {
                angular.equals(e, t) || r.$setViewValue(n.configuration)
            }), r.$render = function () {
                n.configuration = r.$viewValue
            }, e(i.contents())(n)
        };
        return {restrict: "E", require: "^ngModel", scope: {}, link: n}
    }

    a.$inject = ["$compile", "types"], Object.defineProperty(t, "__esModule", {value: !0}), t.default = a;
    var r = n(42), o = i(r)
}, function (e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {default: e}
    }

    function a(e, t, n) {
        var i = function (i, a, r, l) {
            var s = o.default;
            a.html(s), i.$watch("configuration", function (e, t) {
                angular.equals(e, t) || l.$setViewValue(i.configuration)
            }), l.$render = function () {
                i.configuration = l.$viewValue
            }, i.testScript = function (e) {
                var a = angular.copy(i.configuration.jsScript);
                n.testNodeScript(e, a, "filter", t.instant("tb.rulenode.filter") + "", "Filter", ["msg", "metadata", "msgType"], i.ruleNodeId).then(function (e) {
                    i.configuration.jsScript = e, l.$setDirty()
                })
            }, e(a.contents())(i)
        };
        return {restrict: "E", require: "^ngModel", scope: {ruleNodeId: "="}, link: i}
    }

    a.$inject = ["$compile", "$translate", "ruleNodeScriptTest"], Object.defineProperty(t, "__esModule", {value: !0}), t.default = a;
    var r = n(43), o = i(r)
}, function (e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {default: e}
    }

    function a(e, t, n) {
        var i = function (i, a, r, l) {
            var s = o.default;
            a.html(s), i.$watch("configuration", function (e, t) {
                angular.equals(e, t) || l.$setViewValue(i.configuration)
            }), l.$render = function () {
                i.configuration = l.$viewValue
            }, i.testScript = function (e) {
                var a = angular.copy(i.configuration.jsScript);
                n.testNodeScript(e, a, "switch", t.instant("tb.rulenode.switch") + "", "Switch", ["msg", "metadata", "msgType"], i.ruleNodeId).then(function (e) {
                    i.configuration.jsScript = e, l.$setDirty()
                })
            }, e(a.contents())(i)
        };
        return {restrict: "E", require: "^ngModel", scope: {ruleNodeId: "="}, link: i}
    }

    a.$inject = ["$compile", "$translate", "ruleNodeScriptTest"], Object.defineProperty(t, "__esModule", {value: !0}), t.default = a;
    var r = n(44), o = i(r)
}, function (e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {default: e}
    }

    function a(e) {
        var t = function (t, n, i, a) {
            function r(e) {
                e > -1 && t.kvList.splice(e, 1)
            }

            function l() {
                t.kvList || (t.kvList = []), t.kvList.push({key: "", value: ""})
            }

            function s() {
                var e = {};
                t.kvList.forEach(function (t) {
                    t.key && (e[t.key] = t.value)
                }), a.$setViewValue(e), d()
            }

            function d() {
                var e = !0;
                t.required && !t.kvList.length && (e = !1), a.$setValidity("kvMap", e)
            }

            var u = o.default;
            n.html(u), t.ngModelCtrl = a, t.removeKeyVal = r, t.addKeyVal = l, t.kvList = [], t.$watch("query", function (e, n) {
                angular.equals(e, n) || a.$setViewValue(t.query)
            }), a.$render = function () {
                if (a.$viewValue) {
                    var e = a.$viewValue;
                    t.kvList.length = 0;
                    for (var n in e) t.kvList.push({key: n, value: e[n]})
                }
                t.$watch("kvList", function (e, t) {
                    angular.equals(e, t) || s()
                }, !0), d()
            }, e(n.contents())(t)
        };
        return {
            restrict: "E",
            require: "^ngModel",
            scope: {
                required: "=ngRequired",
                disabled: "=ngDisabled",
                requiredText: "=",
                keyText: "=",
                keyRequiredText: "=",
                valText: "=",
                valRequiredText: "="
            },
            link: t
        }
    }

    a.$inject = ["$compile"], Object.defineProperty(t, "__esModule", {value: !0}), t.default = a;
    var r = n(45), o = i(r);
    n(5)
}, function (e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {default: e}
    }

    function a(e, t) {
        var n = function (n, i, a, r) {
            var l = o.default;
            i.html(l), n.types = t, n.$watch("query", function (e, t) {
                angular.equals(e, t) || r.$setViewValue(n.query)
            }), r.$render = function () {
                n.query = r.$viewValue
            }, e(i.contents())(n)
        };
        return {restrict: "E", require: "^ngModel", scope: {}, link: n}
    }

    a.$inject = ["$compile", "types"], Object.defineProperty(t, "__esModule", {value: !0}), t.default = a;
    var r = n(46), o = i(r)
}, function (e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {default: e}
    }

    function a(e, t) {
        var n = function (n, i, a, r) {
            var l = o.default;
            i.html(l), n.ruleNodeTypes = t, n.$watch("configuration", function (e, t) {
                angular.equals(e, t) || r.$setViewValue(n.configuration)
            }), r.$render = function () {
                n.configuration = r.$viewValue
            }, e(i.contents())(n)
        };
        return {restrict: "E", require: "^ngModel", scope: {}, link: n}
    }

    a.$inject = ["$compile", "ruleNodeTypes"], Object.defineProperty(t, "__esModule", {value: !0}), t.default = a;
    var r = n(47), o = i(r)
}, function (e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {default: e}
    }

    Object.defineProperty(t, "__esModule", {value: !0});
    var a = n(95), r = i(a), o = n(97), l = i(o), s = n(98), d = i(s);
    t.default = angular.module("thingsboard.ruleChain.config.transform", []).directive("tbTransformationNodeChangeOriginatorConfig", r.default).directive("tbTransformationNodeScriptConfig", l.default).directive("tbTransformationNodeToEmailConfig", d.default).name
}, function (e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {default: e}
    }

    function a(e, t, n) {
        var i = function (i, a, r, l) {
            var s = o.default;
            a.html(s), i.$watch("configuration", function (e, t) {
                angular.equals(e, t) || l.$setViewValue(i.configuration)
            }), l.$render = function () {
                i.configuration = l.$viewValue
            }, i.testScript = function (e) {
                var a = angular.copy(i.configuration.jsScript);
                n.testNodeScript(e, a, "update", t.instant("tb.rulenode.transformer") + "", "Transform", ["msg", "metadata", "msgType"], i.ruleNodeId).then(function (e) {
                    i.configuration.jsScript = e, l.$setDirty()
                })
            }, e(a.contents())(i)
        };
        return {restrict: "E", require: "^ngModel", scope: {ruleNodeId: "="}, link: i}
    }

    a.$inject = ["$compile", "$translate", "ruleNodeScriptTest"], Object.defineProperty(t, "__esModule", {value: !0}), t.default = a;
    var r = n(48), o = i(r)
}, function (e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {default: e}
    }

    function a(e) {
        var t = function (t, n, i, a) {
            var r = o.default;
            n.html(r), t.$watch("configuration", function (e, n) {
                angular.equals(e, n) || a.$setViewValue(t.configuration)
            }), a.$render = function () {
                t.configuration = a.$viewValue
            }, e(n.contents())(t)
        };
        return {restrict: "E", require: "^ngModel", scope: {}, link: t}
    }

    a.$inject = ["$compile"], Object.defineProperty(t, "__esModule", {value: !0}), t.default = a;
    var r = n(49), o = i(r)
}, function (e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {default: e}
    }

    Object.defineProperty(t, "__esModule", {value: !0});
    var a = n(102), r = i(a), o = n(88), l = i(o), s = n(80), d = i(s), u = n(96), c = i(u), m = n(58), g = i(m),
        p = n(75), f = i(p), b = n(94), v = i(b), y = n(74), h = i(y), q = n(93), $ = i(q), x = n(101), k = i(x);
    t.default = angular.module("thingsboard.ruleChain.config", [r.default, l.default, d.default, c.default, g.default]).directive("tbNodeEmptyConfig", f.default).directive("tbRelationsQueryConfig", v.default).directive("tbDeviceRelationsQueryConfig", h.default).directive("tbKvMapConfig", $.default).config(k.default).name
}, function (e, t) {
    "use strict";

    function n(e) {
        var t = {
            tb: {
                rulenode: {
                    "create-entity-if-not-exists": "如果不存在，则创建新实体",
                    "create-entity-if-not-exists-hint": "如果不存在，请创建上面的新实体集。",
                    "entity-name-pattern": "名称模式",
                    "entity-name-pattern-required": "名称模式是必需的",
                    "entity-name-pattern-hint": "名称模式，使用 <code>${metaKeyName}</code> 从元数据中替换变量",
                    "entity-type-pattern": "类型模式",
                    "entity-type-pattern-required": "类型模式是必需的",
                    "entity-type-pattern-hint": "类型模式，使用 <code>${metaKeyName}</code> 从元数据中替换变量",
                    "entity-cache-expiration": "实体缓存到期时间（秒）",
                    "entity-cache-expiration-hint": "指定允许存储找到的实体记录的最大时间间隔, 0值表示记录永不过期。",
                    "entity-cache-expiration-required": "实体缓存到期时间是必需的.",
                    "entity-cache-expiration-range": "实体缓存过期时间应大于或等于0.",
                    "customer-name-pattern": "客户名称模式",
                    "customer-name-pattern-required": "客户名称模式是必需的",
                    "create-customer-if-not-exists": "如果不存在，则创建新客户",
                    "customer-cache-expiration": "客户缓存到期时间（秒）",
                    "customer-name-pattern-hint": "客户名称模式，使用 <code>${metaKeyName}</code> 从元数据中替换变量",
                    "customer-cache-expiration-hint": "指定允许存储找到的客户记录的最大时间间隔。 , 0值表示记录永不过期。",
                    "customer-cache-expiration-required": "客户缓存到期时间是必需的。",
                    "customer-cache-expiration-range": "客户缓存到期时间应大于或等于0。",
                    "start-interval": "启动间隔",
                    "end-interval": "结束时间间隔",
                    "start-interval-time-unit": "启动间隔时间单位",
                    "end-interval-time-unit": "结束间隔时间单位",
                    "fetch-mode": "Fetch mode",
                    "fetch-mode-hint": "如果选择提取模式“ALL”，您可以选择遥测采样顺序。",
                    "order-by": "排序",
                    "order-by-hint": "选择以选择遥测采样顺序.",
                    "time-unit-milliseconds": "毫秒",
                    "time-unit-seconds": "秒",
                    "time-unit-minutes": "分钟",
                    "time-unit-hours": "小时",
                    "time-unit-days": "天",
                    "time-value-range": "时间值应在1到2147483647之间的范围内.",
                    "start-interval-value-required": "需要启动间隔值.",
                    "end-interval-value-required": "结束间隔值是必需的.",
                    filter: "过滤",
                    switch: "交换器",
                    "message-type": "消息类型",
                    "message-type-required": "消息类型是必需的.",
                    "message-types-filter": "消息类型过滤器",
                    "no-message-types-found": "找不到任何消息类型",
                    "no-message-type-matching": "'{{messageType}}' 未找到.",
                    "create-new-message-type": "创建一个新的!",
                    "message-types-required": "消息类型是必需的.",
                    "client-attributes": "客户属性",
                    "shared-attributes": "共享属性",
                    "server-attributes": "服务器属性",
                    "latest-timeseries": "最新的时间序列",
                    "data-keys": "消息数据",
                    "metadata-keys": "消息元数据",
                    "relations-query": "关系查询",
                    "device-relations-query": "设备",
                    "max-relation-level": "最大关系级别",
                    "relation-type-pattern": "关系类型模式",
                    "relation-type-pattern-hint": "关系类型模式，使用 <code>${metaKeyName}</code> 从元数据中替换变量",
                    "relation-type-pattern-required": "需要关系类型模式",
                    "unlimited-level": "无限级别",
                    "latest-telemetry": "最新遥测",
                    "attr-mapping": "属性映射",
                    "source-attribute": "来源属性",
                    "source-attribute-required": "源属性是必需的.",
                    "source-telemetry": "源遥测",
                    "source-telemetry-required": "源遥测是必需的.",
                    "target-attribute": "目标属性",
                    "target-attribute-required": "目标属性是必需的.",
                    "attr-mapping-required": "应指定至少一个属性映射.",
                    "fields-mapping": "字段映射",
                    "fields-mapping-required": "应指定至少一个字段映射.",
                    "source-field": "来源字段",
                    "source-field-required": "源字段是必需的.",
                    "originator-source": "始发源",
                    "originator-customer": "Customer客户",
                    "originator-tenant": "业务租户",
                    "originator-related": "Related关联",
                    "clone-message": "克隆消息",
                    transform: "转换",
                    "default-ttl": "默认TTL，以秒为单位",
                    "default-ttl-required": "默认TTL是必需的.",
                    "min-default-ttl-message": "只允许0个最小TTL.",
                    "message-count": "消息计数（0  - 无限制）",
                    "message-count-required": "消息计数是必需的.",
                    "min-message-count-message": "仅允许0个最小消息计数.",
                    "period-seconds": "以秒为单位的时间",
                    "period-seconds-required": "期间是必需的.",
                    "min-period-seconds-message": "最短时间仅允许1秒.",
                    originator: "Originator",
                    "message-body": "消息体",
                    "message-metadata": "消息元数据",
                    generate: "Generate",
                    "test-generator-function": "测试生成器函数",
                    generator: "Generator",
                    "test-filter-function": "测试过滤功能",
                    "test-switch-function": "测试开关功能",
                    "test-transformer-function": "测试转换器功能",
                    transformer: "Transformer",
                    "alarm-create-condition": "报警创建条件",
                    "test-condition-function": "报警细节构建器",
                    "alarm-clear-condition": "报警清除状况",
                    "alarm-details-builder": "报警细节构建器",
                    "test-details-function": "测试细节功能",
                    "alarm-type": "报警类型",
                    "alarm-type-required": "报警类型是必需的.",
                    "alarm-severity": "警报严重性",
                    "alarm-severity-required": "报警严重性是必需的",
                    propagate: "传播",
                    condition: "条件",
                    details: "详情",
                    "to-string": "转字符串",
                    "test-to-string-function": "测试转字符串函数",
                    "from-template": "来自模板",
                    "from-template-required": "来自模板是必需的",
                    "from-template-hint": "从地址模板中，使用<code> ${metaKeyName} </code>替换元数据中的变量",
                    "to-template": "到模板",
                    "to-template-required": "到模板是必需的",
                    "mail-address-list-template-hint": "逗号分隔的地址列表，使用<code>${metaKeyName}</code>替换元数据中的变量",
                    "cc-template": "抄送模板",
                    "bcc-template": "密送模板",
                    "subject-template": "附件模板",
                    "subject-template-required": "附件模板是必需的",
                    "subject-template-hint": "邮件主题模板，使用<code>${metaKeyName}</code>替换元数据中的变量",
                    "body-template": "Body 模板",
                    "body-template-required": "Body 模板是必需的",
                    "body-template-hint": "邮件正文模板，使用<code>${metaKeyName}</code>替换元数据中的变量",
                    "request-id-metadata-attribute": "请求标识符元数据属性名称",
                    "timeout-sec": "超时秒数",
                    "timeout-required": "超时是必需的",
                    "min-timeout-message": "仅允许0为最小超时值.",
                    "endpoint-url-pattern": "端点URL模式",
                    "endpoint-url-pattern-required": "端点URL模式是必需的",
                    "endpoint-url-pattern-hint": "HTTP URL地址模式，使用<code>${metaKeyName}</code>替换元数据中的变量",
                    "request-method": "请求方法",
                    "use-simple-client-http-factory": "使用简单的客户端HTTP工厂",
                    headers: "Headers",
                    "headers-hint": "在header/value字段中使用<code>${metaKeyName}</code>来替换元数据中的变量",
                    header: "Header",
                    "header-required": "Header 是必需的",
                    value: "Value",
                    "value-required": "Value 是必需的",
                    "topic-pattern": "主题模式",
                    "topic-pattern-required": "主题模式是必需的",
                    "mqtt-topic-pattern-hint": "MQTT主题模式，使用<code>${metaKeyName}</code>替换元数据中的变量",
                    "bootstrap-servers": "Bootstrap 服务",
                    "bootstrap-servers-required": "Bootstrap 服务值是必需的",
                    "other-properties": "其他属性",
                    key: "Key",
                    "key-required": "Key是必需的",
                    retries: "如果失败则自动重试次数",
                    "min-retries-message": "仅允许最少重试0次.",
                    "batch-size-bytes": "以字节为单位生成批量大小",
                    "min-batch-size-bytes-message": "仅允许最小批量0.",
                    "linger-ms": "本地缓冲时间（ms）",
                    "min-linger-ms-message": "仅允许0 ms的最小值.",
                    "buffer-memory-bytes": "客户端缓冲区最大大小（字节）",
                    "min-buffer-memory-message": "仅允许最小缓冲区大小为0.",
                    acks: "确认数量",
                    "key-serializer": "Key密钥序列化器",
                    "key-serializer-required": "Key密钥序列化器是必需的",
                    "value-serializer": "Value值序列化器",
                    "value-serializer-required": "Value值序列化器是必需的",
                    "topic-arn-pattern": "主题ARN模式",
                    "topic-arn-pattern-required": "主题ARN模式是必需的",
                    "topic-arn-pattern-hint": "主题ARN模式，使用<code>${metaKeyName}</code>替换元数据中的变量",
                    "aws-access-key-id": "AWS Access访问密钥ID",
                    "aws-access-key-id-required": "AWS Access密钥ID是必需的",
                    "aws-secret-access-key": "AWS秘密访问密钥",
                    "aws-secret-access-key-required": "AWS Secret Access Key是必需的",
                    "aws-region": "AWS 区域",
                    "aws-region-required": "AWS区域是必需的",
                    "exchange-name-pattern": "交换名称模式",
                    "routing-key-pattern": "路由密钥模式",
                    "message-properties": "消息属性",
                    host: "Host",
                    "host-required": "Host 是必需的",
                    port: "Port",
                    "port-required": "Port 是必需的",
                    "port-range": "端口应在1到65535的范围内.",
                    "virtual-host": "虚拟主机",
                    username: "用户名",
                    password: "密码",
                    "automatic-recovery": "自动恢复",
                    "connection-timeout-ms": "连接超时（ms）",
                    "min-connection-timeout-ms-message": "仅允许0 ms的最小值.",
                    "handshake-timeout-ms": "握手超时（ms）",
                    "min-handshake-timeout-ms-message": "仅允许0 ms的最小值.",
                    "client-properties": "客户端属性",
                    "queue-url-pattern": "队列URL模式",
                    "queue-url-pattern-required": "队列URL模式是必需的",
                    "queue-url-pattern-hint": "队列URL模式，使用<code>${metaKeyName}</code>替换元数据中的变量",
                    "delay-seconds": "延迟（秒）",
                    "min-delay-seconds-message": "仅允许0秒的最小值。",
                    "max-delay-seconds-message": "最大值仅允许900秒。",
                    name: "名称",
                    "name-required": "名称是必需的",
                    "queue-type": "队列类型",
                    "sqs-queue-standard": "标准",
                    "sqs-queue-fifo": "FIFO",
                    "message-attributes": "消息属性",
                    "message-attributes-hint": "在名称/值字段中使用<code>${metaKeyName}</code>来替换元数据中的变量",
                    "connect-timeout": "连接超时（秒）",
                    "connect-timeout-required": "连接超时是必需的.",
                    "connect-timeout-range": "连接超时应在1到200的范围内.",
                    "client-id": "客户ID",
                    "clean-session": "清理会话",
                    "enable-ssl": "客户ID SSL",
                    credentials: "证书",
                    "credentials-type": "证书类型",
                    "credentials-type-required": "凭据类型是必需的.",
                    "credentials-anonymous": "匿名",
                    "credentials-basic": "Basic",
                    "credentials-pem": "PEM",
                    "username-required": "用户名是必需的.",
                    "password-required": "密码是必需的.",
                    "ca-cert": "CA 证书文件 *",
                    "private-key": "私钥文件 *",
                    cert: "证书文件 *",
                    "no-file": "没有选择文件.",
                    "drop-file": "删除文件或单击以选择要上载的文件.",
                    "private-key-password": "私钥密码",
                    "use-system-smtp-settings": "使用系统SMTP设置",
                    "use-metadata-interval-patterns": "使用元数据间隔模式",
                    "use-metadata-interval-patterns-hint": "如果选中，则规则节点使用消息元数据中的开始和结束间隔模式，假设间隔是以毫秒为单位。",
                    "use-message-alarm-data": "使用消息警报数据",
                    "check-all-keys": "检查是否存在所有选定的键",
                    "check-all-keys-hint": "如果选中，则检查消息数据和元数据中是否存在所有指定的键。",
                    "check-relation-to-specific-entity": "检查与特定实体的关系",
                    "check-relation-hint": "根据方向和关系类型检查是否存在与特定实体或任何实体的关系。",
                    "delete-relation-to-specific-entity": "删除与特定实体的关系",
                    "delete-relation-hint": "根据方向和类型删除传入消息的发起者与指定实体或实体列表之间的关系。",
                    "remove-current-relations": "删除当前的关系",
                    "remove-current-relations-hint": "根据方向和类型从传入消息的发起者中删除当前关系。",
                    "change-originator-to-related-entity": "将发起人更改为相关实体",
                    "change-originator-to-related-entity-hint": "用于将提交的消息作为来自其他实体的消息处理。",
                    "start-interval-pattern": "启动间隔模式",
                    "end-interval-pattern": "结束间隔模式",
                    "start-interval-pattern-required": "需要启动间隔模式",
                    "end-interval-pattern-required": "结束间隔模式是必需的",
                    "start-interval-pattern-hint": "启动间隔模式，使用<code>${metaKeyName}</code>替换元数据中的变量",
                    "end-interval-pattern-hint": "结束间隔模式，使用<code>${metaKeyName}</code>替换元数据中的变量",
                    "smtp-protocol": "协议",
                    "smtp-host": "SMTP 主机",
                    "smtp-host-required": "SMTP主机是必需的.",
                    "smtp-port": "SMTP端口",
                    "smtp-port-required": "您必须提供smtp端口.",
                    "smtp-port-range": "SMTP端口的范围应为1到65535。",
                    "timeout-msec": "超时毫秒",
                    "min-timeout-msec-message": "仅允许0 ms的最小值。",
                    "enter-username": "输入用户名",
                    "enter-password": "输入密码",
                    "enable-tls": "启用TLS",
                    "min-period-0-seconds-message": "仅允许0秒的最小时间段。",
                    "max-pending-messages": "最大待处理消息",
                    "max-pending-messages-required": "需要最大的待处理消息。",
                    "max-pending-messages-range": "最大待处理消息的范围应为1到100000。",
                    "originator-types-filter": "发起人类型过滤器",
                    "interval-seconds": "间隔秒数",
                    "interval-seconds-required": "间隔是必需的.",
                    "min-interval-seconds-message": "仅允许1秒的最小间隔.",
                    "output-timeseries-key-prefix": "输出时间序列键前缀",
                    "output-timeseries-key-prefix-required": "输出时间序列需要密钥前缀.",
                    "separator-hint": '您应按“enter”键以完成字段输入.',
                    "entity-details": "选择实体细节:",
                    "entity-details-country": "国家",
                    "entity-details-state": "省",
                    "entity-details-zip": "Zip",
                    "entity-details-address": "地址",
                    "entity-details-address2": "地址二",
                    "entity-details-additional_info": "附加信息",
                    "entity-details-phone": "手机号码",
                    "entity-details-email": "电子邮件",
                    "add-to-metadata": "将所选详细信息添加到邮件元数数",
                    "add-to-metadata-hint": "如果选中，则将选定的详细信息键添加到消息元数据而不是消息数据。",
                    "entity-details-list-empty": "未选择实体详细信息.",
                    "no-entity-details-matching": "未找到任何实体详细信息匹配。",
                    "custom-table-name": "自定义表名称",
                    "custom-table-name-required": "表名是必需的",
                    "custom-table-hint": "您应输入不带前缀'cs_tb_'的表名。",
                    "message-field": "消息字段",
                    "message-field-required": "消息字段是必需的。",
                    "table-col": "表字段",
                    "table-col-required": "表字段是必需的.",
                    "latitude-key-name": "纬度键名称",
                    "longitude-key-name": "经度关键名称",
                    "latitude-key-name-required": "纬度键名称是必需的.",
                    "longitude-key-name-required": "经度密钥名称是必需的.",
                    "fetch-perimeter-info-from-message-metadata": "从消息元数据中获取周边信息",
                    "perimeter-circle": "圆",
                    "perimeter-polygon": "多边形",
                    "perimeter-type": "周长类型",
                    "circle-center-latitude": "中心纬度",
                    "circle-center-latitude-required": "中心纬度是必需的.",
                    "circle-center-longitude": "中心经度",
                    "circle-center-longitude-required": "中心经度是必需的.",
                    "range-unit-meter": "仪表",
                    "range-unit-kilometer": "公里",
                    "range-unit-foot": "英尺",
                    "range-unit-mile": "英里",
                    "range-unit-nautical-mile": "海里",
                    "range-units": "范围单位",
                    range: "范围",
                    "range-required": "范围是必需的.",
                    "polygon-definition": "多边形定义",
                    "polygon-definition-required": "需要多边形定义.",
                    "polygon-definition-hint": "请使用以下格式手动定义多边形：[[lat1,lon1],[lon2，lon4]，...，[latN,lonN]]。",
                    "min-inside-duration": "内部持续时间最短",
                    "min-inside-duration-value-required": "需要最短的内部持续时间",
                    "min-inside-duration-time-unit": "最短的内部持续时间单位",
                    "min-outside-duration": "最短的外部持续时间",
                    "min-outside-duration-value-required": "需要最短的外部持续时间",
                    "min-outside-duration-time-unit": "最短的外部持续时间单位"
                }, "key-val": {key: "键", value: "值", "remove-entry": "删除输入", "add-entry": "添加输入"}
            }
        };
        e.translations("en_US", t)
    }

    Object.defineProperty(t, "__esModule", {value: !0}), t.default = n
}, function (e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {default: e}
    }

    function a(e) {
        (0, o.default)(e)
    }

    a.$inject = ["$translateProvider"], Object.defineProperty(t, "__esModule", {value: !0}), t.default = a;
    var r = n(100), o = i(r)
}, function (e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t.default = angular.module("thingsboard.ruleChain.config.types", []).constant("ruleNodeTypes", {
        originatorSource: {
            CUSTOMER: {name: "tb.rulenode.originator-customer", value: "CUSTOMER"},
            TENANT: {name: "tb.rulenode.originator-tenant", value: "TENANT"},
            RELATED: {name: "tb.rulenode.originator-related", value: "RELATED"}
        },
        fetchModeType: ["FIRST", "LAST", "ALL"],
        samplingOrder: ["ASC", "DESC"],
        httpRequestType: ["GET", "POST", "PUT", "DELETE"],
        entityDetails: {
            COUNTRY: {name: "tb.rulenode.entity-details-country", value: "COUNTRY"},
            STATE: {name: "tb.rulenode.entity-details-state", value: "STATE"},
            ZIP: {name: "tb.rulenode.entity-details-zip", value: "ZIP"},
            ADDRESS: {name: "tb.rulenode.entity-details-address", value: "ADDRESS"},
            ADDRESS2: {name: "tb.rulenode.entity-details-address2", value: "ADDRESS2"},
            PHONE: {name: "tb.rulenode.entity-details-phone", value: "PHONE"},
            EMAIL: {name: "tb.rulenode.entity-details-email", value: "EMAIL"},
            ADDITIONAL_INFO: {
                name: "tb.rulenode.entity-details-additional_info",
                value: "ADDITIONAL_INFO"
            }
        },
        sqsQueueType: {
            STANDARD: {name: "tb.rulenode.sqs-queue-standard", value: "STANDARD"},
            FIFO: {name: "tb.rulenode.sqs-queue-fifo", value: "FIFO"}
        },
        perimeterType: {
            CIRCLE: {name: "tb.rulenode.perimeter-circle", value: "CIRCLE"},
            POLYGON: {name: "tb.rulenode.perimeter-polygon", value: "POLYGON"}
        },
        timeUnit: {
            MILLISECONDS: {value: "MILLISECONDS", name: "tb.rulenode.time-unit-milliseconds"},
            SECONDS: {value: "SECONDS", name: "tb.rulenode.time-unit-seconds"},
            MINUTES: {value: "MINUTES", name: "tb.rulenode.time-unit-minutes"},
            HOURS: {value: "HOURS", name: "tb.rulenode.time-unit-hours"},
            DAYS: {value: "DAYS", name: "tb.rulenode.time-unit-days"}
        },
        rangeUnit: {
            METER: {value: "METER", name: "tb.rulenode.range-unit-meter"},
            KILOMETER: {value: "KILOMETER", name: "tb.rulenode.range-unit-kilometer"},
            FOOT: {value: "FOOT", name: "tb.rulenode.range-unit-foot"},
            MILE: {value: "MILE", name: "tb.rulenode.range-unit-mile"},
            NAUTICAL_MILE: {value: "NAUTICAL_MILE", name: "tb.rulenode.range-unit-nautical-mile"}
        },
        mqttCredentialTypes: {
            anonymous: {value: "anonymous", name: "tb.rulenode.credentials-anonymous"},
            basic: {value: "basic", name: "tb.rulenode.credentials-basic"},
            "cert.PEM": {value: "cert.PEM", name: "tb.rulenode.credentials-pem"}
        }
    }).name
}]));
//# sourceMappingURL=rulenode-core-config.js.map