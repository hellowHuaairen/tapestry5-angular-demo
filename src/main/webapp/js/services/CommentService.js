
    angular.module('phonecat')
        .factory('CommentService',['$resource', function ($resource) {
            return $resource(window.location.origin + window.location.pathname + 'api/json/phone/comments/:op/:id',{id:'@id'},{
                query: { method: 'GET',params:{id:'@id'}, isArray: true },
                like: {method:'GET',params: {id:'@id',op:'like'}}
            });
        }]);