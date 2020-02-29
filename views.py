from jadi import component

from aj.api.http import url, HttpPlugin
from aj.auth import authorize
from aj.api.endpoint import endpoint, EndpointError

@component(HttpPlugin)
class Handler(HttpPlugin):
    def __init__(self, context):
        self.context = context

    # Register URL for this api
    @url(r'/api/my_plugin')
    # Set the right permissions if necessary, see main.py to activate it.
    #@authorize('my_plugin:show')
    @endpoint(api=True)
    def handle_api_example_my_plugin(self, http_context):

        if http_context.method == 'GET':
            text = "This content was generated through a GET call to Python !"
            return text

        elif http_context.method == 'POST':
            data = http_context.json_body()['my_var']
            text = "This content in the module %s was generated through a POST call to Python !" % data
            return text
