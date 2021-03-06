"""empty message

Revision ID: 8b03944c7a82
Revises: 
Create Date: 2020-09-02 02:39:46.807920

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '8b03944c7a82'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('endorsed_by',
    sa.Column('user_id', sa.Integer(), nullable=True),
    sa.Column('endorse_id', sa.Integer(), nullable=False),
    sa.PrimaryKeyConstraint('endorse_id')
    )
    op.create_table('has_skill',
    sa.Column('uid', sa.Integer(), nullable=False),
    sa.Column('sid', sa.Integer(), nullable=True),
    sa.PrimaryKeyConstraint('uid')
    )
    op.create_table('participate_projects',
    sa.Column('post_id', sa.Integer(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=True),
    sa.PrimaryKeyConstraint('post_id')
    )
    op.create_table('post_projects',
    sa.Column('post_id', sa.Integer(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.PrimaryKeyConstraint('post_id')
    )
    op.create_table('projects',
    sa.Column('pid', sa.Integer(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.Column('pic', sa.BLOB(), nullable=True),
    sa.Column('status', sa.String(length=255), nullable=True),
    sa.Column('description', sa.String(length=255), nullable=False),
    sa.PrimaryKeyConstraint('pid'),
    sa.UniqueConstraint('user_id')
    )
    op.create_table('rating',
    sa.Column('rid', sa.Integer(), nullable=False),
    sa.Column('uid', sa.Integer(), nullable=True),
    sa.Column('rating', sa.Integer(), nullable=False),
    sa.Column('comment', sa.String(length=255), nullable=True),
    sa.PrimaryKeyConstraint('rid')
    )
    op.create_table('recruitment',
    sa.Column('pid', sa.Integer(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=True),
    sa.Column('participate', sa.Integer(), nullable=True),
    sa.PrimaryKeyConstraint('pid')
    )
    op.create_table('skill',
    sa.Column('sid', sa.Integer(), nullable=False),
    sa.Column('skill_name', sa.String(length=255), nullable=True),
    sa.Column('mo_of_expereince', sa.Integer(), nullable=True),
    sa.PrimaryKeyConstraint('sid')
    )
    op.create_table('skill_endorsement',
    sa.Column('eid', sa.Integer(), nullable=False),
    sa.Column('uid', sa.Integer(), nullable=True),
    sa.Column('skill_id', sa.Integer(), nullable=True),
    sa.Column('comment', sa.Integer(), nullable=True),
    sa.PrimaryKeyConstraint('eid')
    )
    op.create_table('skill_req',
    sa.Column('post_id', sa.Integer(), nullable=False),
    sa.Column('skill_id', sa.Integer(), nullable=True),
    sa.PrimaryKeyConstraint('post_id')
    )
    op.create_table('timeline',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('pid', sa.Integer(), nullable=False),
    sa.Column('uid', sa.Integer(), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('user_projects',
    sa.Column('uid', sa.Integer(), nullable=False),
    sa.Column('pid', sa.Integer(), nullable=True),
    sa.Column('type', sa.String(length=255), nullable=True),
    sa.PrimaryKeyConstraint('uid')
    )
    op.create_table('users',
    sa.Column('id', sa.Integer(), autoincrement=True, nullable=False),
    sa.Column('full_name', sa.String(length=255), nullable=True),
    sa.Column('profile_picture', sa.BLOB(), nullable=True),
    sa.Column('headline', sa.String(length=255), nullable=True),
    sa.Column('school', sa.String(length=255), nullable=True),
    sa.Column('rid', sa.Integer(), nullable=True),
    sa.Column('eid', sa.Integer(), nullable=True),
    sa.Column('email', sa.String(length=255), nullable=True),
    sa.Column('password', sa.String(length=255), nullable=True),
    sa.Column('sid', sa.Integer(), nullable=True),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('users')
    op.drop_table('user_projects')
    op.drop_table('timeline')
    op.drop_table('skill_req')
    op.drop_table('skill_endorsement')
    op.drop_table('skill')
    op.drop_table('recruitment')
    op.drop_table('rating')
    op.drop_table('projects')
    op.drop_table('post_projects')
    op.drop_table('participate_projects')
    op.drop_table('has_skill')
    op.drop_table('endorsed_by')
    # ### end Alembic commands ###
