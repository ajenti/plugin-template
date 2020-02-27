from jadi import component

from aj.plugins.core.api.sidebar import SidebarItemProvider


@component(SidebarItemProvider)
class ItemProvider(SidebarItemProvider):
    def __init__(self, context):
        pass

    def provide(self):
        return [
            {
                # category:tools, category:sofware, category:system, category:other
                'attach': 'category:general',
                'name': 'My Plugin',
                # https://fontawesome.com/icons/
                'icon': 'question',
                'url': '/view/my_plugin',
                'children': []
            }
        ]

# Uncomment the following lines to set a new permission
# from aj.auth import PermissionProvider
# @component(PermissionProvider)
# class Permissions (PermissionProvider):
#     def provide(self):
#         return [
#             {
#                 'id': 'my_plugin:show',
#                 'name': _('Show the Python binding example'),
#                 'default': False,
#             },
#         ]