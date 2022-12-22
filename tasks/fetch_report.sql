-- Add your SQL queries here.
-- See SQL documentation: https://docs.airplane.dev/creating-tasks/sql
select timestamp, context_traits_email as email
from rudderstack where user_id = :user_id and context_traits_email != '';
