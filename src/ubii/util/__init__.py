import json
import difflib


def diff_dicts(compare, expected, **kwargs):
    """
    Show diff of dictionaries for better error messages.
    """
    left = json.dumps(compare, indent=2, sort_keys=True)
    right = json.dumps(expected, indent=2, sort_keys=True)
    diff = difflib.unified_diff(left.splitlines(True), right.splitlines(True), **kwargs)
    return list(diff)


