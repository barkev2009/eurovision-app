from rest_framework.views import APIView
from rest_framework.response import Response
import form_database as sql


class TestAPIView(APIView):
	def get(self, request, *args, **kwargs):
		data = sql.get_all_songs()
		# data = [
		# 	{
		# 		"id": 1,
		# 		"name": 'John'
		# 	},
		# 	{
		# 		"id": 2,
		# 		"name": 'Jane'
		# 	}
		# ]
		return Response(data)
