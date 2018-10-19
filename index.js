angular.module('app', [])
  .controller('mainCtrl', mainCtrl)
  .directive('comment', commentsDirective);

function mainCtrl ($scope) {
  $scope.comments = [];
  $scope.commentCount = 0;

  $scope.addComment = function (comment) {
    console.log(comment.comment);
    $scope.comments.push(comment.comment);
    $scope.commentCount = $scope.commentCount + 1;
    UpdateCount($scope.commentCount);
    comment.comment = '';
  }
}

function UpdateCount(number) {
  console.log('Count update being called');
    var num = number.toString();
    document.getElementById('count').innerHTML = '<p id=\'count\'>Comments: ' + num + '</p>';
}

function commentsDirective () {
  console.log("we are calling the comment directive");
  return {
    scope: {
      comment: '='
    },
    restrict: 'E',
    replace: 'true',
    template: (
      '<div class = "Comment">' +
        '<h4>{{comment}}</h4>' +
      '</div>'
    )
  };
}
